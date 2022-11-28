import { publicIpv4 } from "public-ip";
import config from "./config.json" assert { type: "json" };
import axios from "axios";

let IP = null;
let NewIP = null;
let messages = "";
//get date-time
const getDateTime = () => {
    let today = new Date();
    let date = today.getDate() + "-" + (today.getMonth() + 1) + "-" + today.getFullYear();
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let DateTime = date + " " + time;
    return DateTime;
};

async function changeIP() {
    try {
        // Load Config
        if (!config.hostname) {
            throw Error("Hostname missing");
        }
        let cfAuthHeaders = {};
        if (config.bearerToken) {
            cfAuthHeaders = {
                Authorization: `Bearer ${config.bearerToken}`,
            };
        } else if (config.email && config.token) {
            cfAuthHeaders = {
                "X-Auth-Email": config.email,
                "X-Auth-Key": config.token,
            };
        } else {
            throw Error("Bearer Token or (Email + Key) missing");
        }

        // Get DNS Record ID
        const cfDnsIdReqUrl = `https://api.cloudflare.com/client/v4/zones/${encodeURI(
            config.zoneid
        )}/dns_records?name=${encodeURI(config.hostname)}`;
        const cfDnsIdRes = await axios.get(cfDnsIdReqUrl, {
            headers: cfAuthHeaders,
        });
        if (cfDnsIdRes.data.result.length <= 0) {
            throw Error("DNS record not found");
        }

        const results = await Promise.all(
            cfDnsIdRes.data.result.map(async (cfDnsRecord) => {
                IP = cfDnsRecord.content;
                let content;
                switch (cfDnsRecord.type) {
                    case "A":
                        content = NewIP;
                        break;
                    case "AAAA":
                        content = NewIP;
                        break;
                    default:
                        console.error(`DNS Record Type unsupported: ${cfDnsRecord.type}`);
                        return;
                }
                // Update DNS Record
                const cfPutReqUrl = `https://api.cloudflare.com/client/v4/zones/${encodeURI(
                    config.zoneid
                )}/dns_records/${encodeURI(cfDnsRecord.id)}`;
                const cfPutReqData = {
                    type: cfDnsRecord.type,
                    name: cfDnsRecord.name,
                    content: content,
                    proxied: true,
                };
                return axios.put(cfPutReqUrl, cfPutReqData, { headers: cfAuthHeaders });
            })
        );
        results.forEach((result) => {
            if (!result || !result.data) {
                console.error("Warning: null result received, see above for error messages");
                return;
            }
            if (result.data.success === true) {
                console.log("DNS Record update success at: " + getDateTime());
                console.log("IP has been updated: " + IP + " ==> " + NewIP);
            } else {
                console.error("\nDNS Record update failed:\n", JSON.stringify(result.data.errors, undefined, 2));
            }
        });
    } catch (err) {
        console.log(err);
    }
}

const autochangeip = async () => {
    try {
        NewIP = await publicIpv4();
        //check get new ip success
        if (NewIP) {
            //check if ip changed
            if (IP !== NewIP) {
                //update ip
                changeIP();
            }
        }
    } catch (err) {
        console.log(err);
    }
};

export default autochangeip;
