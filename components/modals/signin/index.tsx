"use client";
import React, { useState } from "react";
import type { FormProps } from "antd";
import { Button, Form, Input, Modal } from "antd";
import { login } from "@/service/auth.service";
import { toast } from "react-toastify";
import { SignIn } from "@/types/auth-types";

type FieldType = {
  email?: string;
  password?: string;
};

const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const SignInModal: React.FC = () => {
  const [open, setOpen] = useState(false);
  const onFinish: FormProps<SignIn>["onFinish"] = async (values) => {
    console.log("Success:", values);

    try {
      const status = await login(values);
      console.log("Login status:", status);
      if (status === 200) {
        setOpen(false);
        toast.success("Logied successfuly");
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };
  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="text-blue-600"
      >
        Войти
      </button>
      <Modal
        centered
        open={open}
        onCancel={() => setOpen(false)}
        width={600}
        footer={null}
        className="p-20"
      >
        <b className="text-center text-2xl">Войти</b>
        <Form
          name="basic"
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          style={{ width: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          className="mt-8"
        >
          <Form.Item<FieldType>
            name="email"
            rules={[{ required: true, message: "Please input your email!" }]}
          >
            <Input placeholder="Email" type="email" />
          </Form.Item>

          <Form.Item<FieldType>
            name="password"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>

          <div className="flex justify-between items-center w-[390px] mb-3">
            <span>У вас уже есть аккаунт?</span>
            <button className="text-blue-600">Зарегистрироваться</button>
          </div>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-full">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
};

export default SignInModal;
