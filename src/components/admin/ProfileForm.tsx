import {Button, Form, Input, InputNumber, Space} from "antd";
import React from "react";
import {Profile} from "../../types";

interface ProfileFormProps {
  profile?: Partial<Profile>;
  onSubmit: (profile: Profile) => void;
  onCancel: () => void;
}

export const ProfileForm: React.FC<ProfileFormProps> = ({
  profile = {},
  onSubmit,
  onCancel,
}) => {
  const [form] = Form.useForm();

  const initialValues: Partial<Profile> = {
    name: "",
    photo: "",
    description: "",
    address: "",
    coordinates: [0, 0],
    contact: "",
    interests: [],
    ...profile,
  };

  const handleSubmit = (values: any) => {
    const formattedValues = {
      ...values,
      interests: values.interests
        .split(",")
        .map((i: string) => i.trim())
        .filter(Boolean),
    };
    onSubmit(formattedValues as Profile);
  };

  return (
    <Form
      form={form}
      layout="vertical"
      initialValues={initialValues}
      onFinish={handleSubmit}
      className="space-y-4"
    >
      <Form.Item
        name="name"
        label="Name"
        rules={[{required: true, message: "Please input your name!"}]}
      >
        <Input className="w-full" />
      </Form.Item>

      <Form.Item
        name="photo"
        label="Photo URL"
        rules={[{required: true, message: "Please input the photo URL!"}]}
      >
        <Input type="url" className="w-full" />
      </Form.Item>

      <Form.Item
        name="description"
        label="Description"
        rules={[{required: true, message: "Please input the description!"}]}
      >
        <Input.TextArea className="w-full" />
      </Form.Item>

      <Form.Item
        name="address"
        label="Address"
        rules={[{required: true, message: "Please input the address!"}]}
      >
        <Input className="w-full" />
      </Form.Item>

      <Space className="w-full">
        <Form.Item
          name={["coordinates", 0]}
          label="Longitude"
          rules={[{required: true, message: "Please input the longitude!"}]}
        >
          <InputNumber className="w-full" />
        </Form.Item>
        <Form.Item
          name={["coordinates", 1]}
          label="Latitude"
          rules={[{required: true, message: "Please input the latitude!"}]}
        >
          <InputNumber className="w-full" />
        </Form.Item>
      </Space>

      <Form.Item
        name="contact"
        label="Contact"
        rules={[
          {
            required: true,
            message: "Please input the contact email!",
            type: "email",
          },
        ]}
      >
        <Input type="email" className="w-full" />
      </Form.Item>

      <Form.Item
        name="interests"
        label="Interests (comma-separated)"
        rules={[{required: true, message: "Please input your interests!"}]}
      >
        <Input
          className="w-full"
          placeholder="e.g., Programming, Design, Travel"
        />
      </Form.Item>

      <Form.Item>
        <Space className="w-full justify-end">
          <Button onClick={onCancel}>Cancel</Button>
          <Button type="primary" htmlType="submit">
            {profile.id ? "Update Profile" : "Create Profile"}
          </Button>
        </Space>
      </Form.Item>
    </Form>
  );
};
