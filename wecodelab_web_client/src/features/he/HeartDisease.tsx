import { Field, Form, Formik } from "formik";
import styled from "styled-components";
import axios from "axios";
import { useEffect } from "react";

const ALL = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 20px;
    max-width: 1600px;
    form {
        background-color: #fafafa;
        border-radius: 5px;
        broder: 1px solid #eaeaea;
        padding: 20px;
        label,
        input,
        button {
            font-size: 16px;
            padding: 0.5rem;
            margin-bottom: 1rem;
            border-radius: 0.5rem;
            width: 100%;
            background-color: #f1f4f9;
            text-decoration: none;
            border: none;
        }
        button {
            background-color: #657ef8;
            color: #fff;
            :hover {
                color: #fff;
                font-weight: bold;
            }
        }
        div {
            display: flex;
            label {
                display: flex;
                align-items: baseline;
                input {
                    width: 10%;
                }
            }
        }
    }
`;

const get = function (callback: any) {
    axios({
        url: `http://118.71.64.144:3001/api/get`,
        method: "get",
    }).then((result) => {
        callback(result.data);
    });
};

function HeartDisease() {
    useEffect(() => {
        get((data: any) => {
            console.log(data);
        });
    }, []);

    return (
        <ALL>
            <h1>Heart Disease prediction</h1>
            <Formik
                initialValues={{
                    BMI: 0,
                    hutthuoc: 0,
                    uongruou: 0,
                    dotquy: 0,
                    PhysicalHealth: 0,
                    MentalHealth: 0,
                    DiffWalking: 0,
                    gioitinh: 0,
                    tuoi: 0,
                    sactoc: 0,
                    tieuduong: 0,
                    PhysicalActivity: 0,
                    GenHealth: 0,
                    hen: 0,
                    than: 0,
                    SkinCancer: 0,
                }}
                onSubmit={(values) => {}}
            >
                {() => (
                    <Form>
                        <label htmlFor="bmi">BMI</label>
                        <Field name="BMI" type="number" id="bmi" />
                        <p>Chỉ số khối cơ thể</p>

                        <label htmlFor="hutthuoc">Hút thuốc</label>
                        <div role="group" aria-labelledby="my-radio-group" id="hutthuoc">
                            <label>
                                <Field type="radio" name="hutthuoc" value="1" />
                                <p>Có</p>
                            </label>
                            <label>
                                <Field type="radio" name="hutthuoc" value="0" />
                                <p>Không</p>
                            </label>
                        </div>
                        <p>Bạn có hút thuốc không ?</p>

                        <label htmlFor="uongruou">Uống rượu</label>
                        <div role="group" aria-labelledby="my-radio-group" id="uongruou">
                            <label>
                                <Field type="radio" name="uongruou" value="1" />
                                <p>Có</p>
                            </label>
                            <label>
                                <Field type="radio" name="uongruou" value="0" />
                                <p>Không</p>
                            </label>
                        </div>
                        <p>Bạn có uống rượu không ?</p>

                        <label htmlFor="dotquy">Đột quỵ</label>
                        <div role="group" aria-labelledby="my-radio-group" id="dotquy">
                            <label>
                                <Field type="radio" name="dotquy" value="1" />
                                <p>Có</p>
                            </label>
                            <label>
                                <Field type="radio" name="dotquy" value="0" />
                                <p>Không</p>
                            </label>
                        </div>
                        <p>Bạn đã bao giờ bị đột quỵ chưa ?</p>

                        <label htmlFor="PhysicalHealth">Sức khoẻ thể chất</label>
                        <Field name="PhysicalHealth" type="number" id="PhysicalHealth" />
                        <p>
                            Bây giờ, hãy nghĩ về sức khỏe thể chất của bạn, bao gồm cả bệnh tật và thương tích, trong
                            bao nhiêu ngày trong suốt 30 ngày qua
                        </p>

                        <label htmlFor="MentalHealth">Sức khỏe tinh thần</label>
                        <Field name="MentalHealth" type="number" id="MentalHealth" />
                        <p>
                            Suy nghĩ về sức khỏe tinh thần của bạn, trong 30 ngày qua sức khỏe tinh thần của bạn không
                            tốt là bao nhiêu ngày? (0-30 ngày)
                        </p>

                        <label htmlFor="DiffWalking">Đi bộ gặp khó khăn</label>
                        <div role="group" aria-labelledby="my-radio-group" id="DiffWalking">
                            <label>
                                <Field type="radio" name="DiffWalking" value="1" />
                                <p>Có</p>
                            </label>
                            <label>
                                <Field type="radio" name="DiffWalking" value="0" />
                                <p>Không</p>
                            </label>
                        </div>
                        <p>Bạn có gặp khó khăn nghiêm trọng khi đi bộ hoặc leo cầu thang không?</p>

                        <label htmlFor="gioitinh">Giới tính</label>
                        <div role="group" aria-labelledby="my-radio-group" id="gioitinh">
                            <label>
                                <Field type="radio" name="gioitinh" value="1" />
                                <p>Nữ</p>
                            </label>
                            <label>
                                <Field type="radio" name="gioitinh" value="0" />
                                <p>Nam</p>
                            </label>
                        </div>

                        <label htmlFor="tuoi">Tuổi</label>
                        <Field name="tuoi" type="number" id="tuoi" />

                        <label htmlFor="sactoc">Sắc tộc</label>
                        <div role="group" aria-labelledby="my-radio-group" id="sactoc">
                            <label>
                                <Field type="radio" name="sactoc" value="5" />
                                <p>White</p>
                            </label>
                            <label>
                                <Field type="radio" name="sactoc" value="4" />
                                <p>Black</p>
                            </label>
                            <label>
                                <Field type="radio" name="sactoc" value="3" />
                                <p>Asian</p>
                            </label>
                            <label>
                                <Field type="radio" name="sactoc" value="2" />
                                <p>American Indian/Alaskan Native</p>
                            </label>
                            <label>
                                <Field type="radio" name="sactoc" value="1" />
                                <p>Other</p>
                            </label>
                            <label>
                                <Field type="radio" name="sactoc" value="0" />
                                <p>Hispanic</p>
                            </label>
                        </div>

                        <label htmlFor="tieuduong">Tiểu đường</label>
                        <div role="group" aria-labelledby="my-radio-group" id="tieuduong">
                            <label>
                                <Field type="radio" name="tieuduong" value="3" />
                                <p>Có</p>
                            </label>
                            <label>
                                <Field type="radio" name="tieuduong" value="2" />
                                <p>Yes (during pregnancy)</p>
                            </label>
                            <label>
                                <Field type="radio" name="tieuduong" value="1" />
                                <p>No, borderline diabetes</p>
                            </label>
                            <label>
                                <Field type="radio" name="tieuduong" value="0" />
                                <p>Không</p>
                            </label>
                        </div>
                        <p>Bạn có bị tiểu đường không ?</p>

                        <label htmlFor="PhysicalActivity">Hoạt động thể chất</label>
                        <div role="group" aria-labelledby="my-radio-group" id="PhysicalActivity">
                            <label>
                                <Field type="radio" name="PhysicalActivity" value="1" />
                                <p>Có</p>
                            </label>
                            <label>
                                <Field type="radio" name="PhysicalActivity" value="0" />
                                <p>Không</p>
                            </label>
                        </div>
                        <p>Bạn có thường xuyên vận động không ?</p>

                        <label htmlFor="GenHealth">Tiểu đường</label>
                        <div role="group" aria-labelledby="my-radio-group" id="GenHealth">
                            <label>
                                <Field type="radio" name="GenHealth" value="4" />
                                <p>Excellent</p>
                            </label>
                            <label>
                                <Field type="radio" name="GenHealth" value="3" />
                                <p>Very good</p>
                            </label>
                            <label>
                                <Field type="radio" name="GenHealth" value="2" />
                                <p>Good</p>
                            </label>
                            <label>
                                <Field type="radio" name="GenHealth" value="1" />
                                <p>Fair</p>
                            </label>
                            <label>
                                <Field type="radio" name="GenHealth" value="0" />
                                <p>Poor</p>
                            </label>
                        </div>
                        <p>Bạn có thể nói rằng nhìn chung sức khỏe của bạn là ...</p>

                        <label htmlFor="hen">Hen suyễn</label>
                        <div role="group" aria-labelledby="my-radio-group" id="hen">
                            <label>
                                <Field type="radio" name="hen" value="1" />
                                <p>Có</p>
                            </label>
                            <label>
                                <Field type="radio" name="hen" value="0" />
                                <p>Không</p>
                            </label>
                        </div>
                        <p>Bạn có bị hen suyễn không ?</p>

                        <label htmlFor="than">Bệnh thận</label>
                        <div role="group" aria-labelledby="my-radio-group" id="than">
                            <label>
                                <Field type="radio" name="than" value="1" />
                                <p>Có</p>
                            </label>
                            <label>
                                <Field type="radio" name="than" value="0" />
                                <p>Không</p>
                            </label>
                        </div>
                        <p>Bạn có bị bênh thận không ?</p>

                        <label htmlFor="SkinCancer">Ung thư da</label>
                        <div role="group" aria-labelledby="my-radio-group" id="SkinCancer">
                            <label>
                                <Field type="radio" name="SkinCancer" value="1" />
                                <p>Có</p>
                            </label>
                            <label>
                                <Field type="radio" name="SkinCancer" value="0" />
                                <p>Không</p>
                            </label>
                        </div>
                        <p>Bạn có bị ung thư da không ?</p>

                        <button type="submit">Kiểm tra</button>
                    </Form>
                )}
            </Formik>
        </ALL>
    );
}

export default HeartDisease;
