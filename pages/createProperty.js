import { createProperty, updateProperty } from "@/utils/api";
import {
  Button,
  Drawer,
  Form,
  Input,
  InputNumber,
  message,
  Upload,
} from "antd";
import { useEffect, useState } from "react";

const CreatePropertyForm = ({ visible, onClose, initialData }) => {
  const [loading, setLoading] = useState(false);
  const [image, setImage] = useState(null);
  const [form] = Form.useForm();

  useEffect(() => {
    if (initialData) {
      const mappedData = {
        ...initialData,
        forType: initialData.for_type,
      };
      form.setFieldsValue(mappedData);
      setImage(initialData.image);
    } else {
      form.resetFields();
    }
  }, [initialData, form]);

  const handleSubmit = async (values) => {
    setLoading(true);
    try {
      const propertyData = { ...values, image };

      if (initialData) {
        await updateProperty(initialData._id, propertyData);
      } else {
        await createProperty(propertyData);
      }

      message.success("Property saved successfully!");
      closeDrawer();
    } catch (error) {
      message.error("Failed to save property: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleImageChange = (info) => {
    if (info.file.status === "done") {
      const uploadedUrl = info.file.response?.url || "fallback-url";
      setImage(uploadedUrl);
      message.success("Image uploaded successfully");
    } else if (info.file.status === "error") {
      message.error("Image upload failed");
    }
  };

  const closeDrawer = () => {
    form.resetFields();
    setImage(null);
    onClose();
  };

  return (
    <Drawer
      title={initialData ? "Edit Property" : "Create Property"}
      open={visible}
      onClose={closeDrawer}
      width={500}
    >
      <Form
        form={form}
        onFinish={handleSubmit}
        layout="vertical"
        style={{ maxWidth: 400 }}
      >
        <Form.Item
          label="Property Name"
          name="name"
          rules={[
            { required: true, message: "Please input the property name!" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Category"
          name="category"
          rules={[{ required: true, message: "Please input the category!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="For Type (rent/sale)"
          name="forType"
          rules={[
            {
              required: true,
              message: "Please specify if it's for rent or sale!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Price"
          name="price"
          rules={[
            { required: true, message: "Please input the price!" },
            { type: "number", message: "Price must be a number!" },
          ]}
        >
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          label="Monthly Price"
          name="monthlyPrice"
          rules={[
            { required: true, message: "Please input the monthly price!" },
            { type: "number", message: "Monthly price must be a number!" },
          ]}
        >
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          label="Location"
          name="location"
          rules={[{ required: true, message: "Please input the location!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Area (sq.ft)"
          name="area"
          rules={[{ required: true, message: "Please input the area!" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Beds"
          name="beds"
          rules={[
            { required: true, message: "Please input the number of beds!" },
            { type: "number", message: "Beds must be a number!" },
          ]}
        >
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          label="Baths"
          name="baths"
          rules={[
            { required: true, message: "Please input the number of baths!" },
            { type: "number", message: "Baths must be a number!" },
          ]}
        >
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          label="Rating"
          name="rating"
          rules={[
            { required: true, message: "Please input the rating!" },
            { type: "number", message: "Rating must be a number!" },
          ]}
        >
          <InputNumber min={1} max={5} style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          label="Reviews"
          name="reviews"
          rules={[
            { required: true, message: "Please input the number of reviews!" },
            { type: "number", message: "Reviews must be a number!" },
          ]}
        >
          <InputNumber style={{ width: "100%" }} />
        </Form.Item>

        <Form.Item
          label="Description"
          name="description"
          rules={[{ required: true, message: "Please input the description!" }]}
        >
          <Input.TextArea rows={4} />
        </Form.Item>
        <Form.Item
          label="Upload Image"
          name="image"
          style={{ display: "none" }} // Hidden input for validation
        >
          <Input value={image} />
        </Form.Item>

        <Form.Item>
          <Upload
            listType="picture"
            showUploadList={false}
            onChange={handleImageChange}
          >
            <Button>Upload Image</Button>
          </Upload>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" loading={loading} block>
            {initialData ? "Update Property" : "Add Property"}
          </Button>
        </Form.Item>
      </Form>
    </Drawer>
  );
};

export default CreatePropertyForm;
