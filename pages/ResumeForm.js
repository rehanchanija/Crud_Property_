import {
  Button,
  Form,
  Input,
  Layout,
  Menu,
  message,
  Modal,
  Select,
} from "antd";
import { useState } from "react";

const { Sider, Content } = Layout;

export default function ResumeBuilder() {
  const [currentStep, setCurrentStep] = useState("1");
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    city: "",
    country: "",
    pinCode: "",
    dateOfBirth: "",
    occupation: "",
    employer: "",
    description: "",
    jobTitle: "",
    employeeEmployer: "",
    begin: "",
    end: "",
    employeeDescription: "",
    college: "",
    degree: "",
    educationBegin: "",
    educationEnd: "",
    educationDescription: "",
    language1: "",
    language2: "",
    language3: "",
    skill1: "",
    skill2: "",
    skill3: "",
  });

  const [template, setTemplate] = useState("Template 1");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [textColor, setTextColor] = useState("#000000");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    console.log("Submitted Data:", formData);
    message.success("Form submitted successfully!");
  };

  const handleTemplateChange = (value) => {
    setTemplate(value);
  };

  const handleColorChange = (e) => {
    setTextColor(e.target.value);
  };

  return (
    <Layout className="h-screen">
      {/* Sidebar with Steps */}
      <Sider width={200} className="bg-white">
        <Menu
          mode="vertical"
          defaultSelectedKeys={["1"]}
          selectedKeys={[currentStep]}
          onClick={(e) => setCurrentStep(e.key)}
          style={{ height: "100%", borderRight: 0 }}
        >
          <Menu.Item key="1">Personal Details</Menu.Item>
          <Menu.Item key="2">Professional Summary</Menu.Item>
          <Menu.Item key="3">Employee</Menu.Item>
          <Menu.Item key="4">Education</Menu.Item>
          <Menu.Item key="5">Languages</Menu.Item>
          <Menu.Item key="6">Skills</Menu.Item>
        </Menu>
      </Sider>

      {/* Form and Preview Section */}
      <Layout>
        <Content className="p-6 bg-gray-100 flex">
          {/* Form Section */}
          <div className="w-2/3 p-4 bg-white shadow rounded-md">
            {currentStep === "1" && (
              <>
                <h2 className="text-lg font-semibold mb-4">Personal Details</h2>
                <Form layout="vertical">
                  <Form.Item label="First Name">
                    <Input
                      placeholder="Enter your first name"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                  </Form.Item>
                  <Form.Item label="Last Name">
                    <Input
                      placeholder="Enter your last name"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </Form.Item>
                  <Form.Item label="Email">
                    <Input
                      placeholder="Enter your email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                    />
                  </Form.Item>
                  <Form.Item label="Phone">
                    <Input
                      placeholder="Enter your phone number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </Form.Item>
                  <Form.Item label="City">
                    <Input
                      placeholder="Enter your city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                    />
                  </Form.Item>
                  <Form.Item label="Country">
                    <Input
                      placeholder="Enter your country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                    />
                  </Form.Item>
                  <Form.Item label="Pincode">
                    <Input
                      placeholder="Enter your pincode"
                      name="pinCode"
                      value={formData.pinCode}
                      onChange={handleChange}
                    />
                  </Form.Item>
                  <Form.Item label="Date of Birth">
                    <Input
                      type="date"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleChange}
                    />
                  </Form.Item>
                  <Form.Item label="Occupation">
                    <Input
                      placeholder="Enter your occupation"
                      name="occupation"
                      value={formData.occupation}
                      onChange={handleChange}
                    />
                  </Form.Item>
                </Form>
              </>
            )}

            {currentStep === "2" && (
              <>
                <h2 className="text-lg font-semibold mb-4">
                  Professional Summary
                </h2>
                <Form layout="vertical">
                  <Form.Item label="Employer">
                    <Input
                      placeholder="Enter your employer's name"
                      name="employer"
                      value={formData.employer}
                      onChange={handleChange}
                    />
                  </Form.Item>
                  <Form.Item label="Description">
                    <Input.TextArea
                      placeholder="Enter a brief description"
                      name="description"
                      value={formData.description}
                      onChange={handleChange}
                      rows={4}
                    />
                  </Form.Item>
                </Form>
              </>
            )}

            {currentStep === "3" && (
              <>
                <h2 className="text-lg font-semibold mb-4">Employee</h2>
                <Form layout="vertical">
                  <Form.Item label="Job Title">
                    <Input
                      placeholder="Enter your job title"
                      name="jobTitle"
                      value={formData.jobTitle}
                      onChange={handleChange}
                    />
                  </Form.Item>
                  <Form.Item label="Employer">
                    <Input
                      placeholder="Enter your employer"
                      name="employeeEmployer"
                      value={formData.employeeEmployer}
                      onChange={handleChange}
                    />
                  </Form.Item>
                  <Form.Item label="Begin">
                    <Input
                      type="date"
                      name="begin"
                      value={formData.begin}
                      onChange={handleChange}
                    />
                  </Form.Item>
                  <Form.Item label="End">
                    <Input
                      type="date"
                      name="end"
                      value={formData.end}
                      onChange={handleChange}
                    />
                  </Form.Item>
                  <Form.Item label="Description">
                    <Input.TextArea
                      placeholder="Enter a description"
                      name="employeeDescription"
                      value={formData.employeeDescription}
                      onChange={handleChange}
                      rows={4}
                    />
                  </Form.Item>
                </Form>
              </>
            )}

            {currentStep === "4" && (
              <>
                <h2 className="text-lg font-semibold mb-4">Education</h2>
                <Form layout="vertical">
                  <Form.Item label="College">
                    <Input
                      placeholder="Enter your college name"
                      name="college"
                      value={formData.college}
                      onChange={handleChange}
                    />
                  </Form.Item>
                  <Form.Item label="Degree">
                    <Input
                      placeholder="Enter your degree"
                      name="degree"
                      value={formData.degree}
                      onChange={handleChange}
                    />
                  </Form.Item>
                  <Form.Item label="Begin">
                    <Input
                      type="date"
                      name="educationBegin"
                      value={formData.educationBegin}
                      onChange={handleChange}
                    />
                  </Form.Item>
                  <Form.Item label="End">
                    <Input
                      type="date"
                      name="educationEnd"
                      value={formData.educationEnd}
                      onChange={handleChange}
                    />
                  </Form.Item>
                  <Form.Item label="Description">
                    <Input.TextArea
                      placeholder="Enter a description"
                      name="educationDescription"
                      value={formData.educationDescription}
                      onChange={handleChange}
                      rows={4}
                    />
                  </Form.Item>
                </Form>
              </>
            )}

            {currentStep === "5" && (
              <>
                <h2 className="text-lg font-semibold mb-4">Languages</h2>
                <Form layout="vertical">
                  <Form.Item label="Language 1">
                    <Input
                      placeholder="Enter first language"
                      name="language1"
                      value={formData.language1}
                      onChange={handleChange}
                    />
                  </Form.Item>
                  <Form.Item label="Language 2">
                    <Input
                      placeholder="Enter second language"
                      name="language2"
                      value={formData.language2}
                      onChange={handleChange}
                    />
                  </Form.Item>
                  <Form.Item label="Language 3">
                    <Input
                      placeholder="Enter third language"
                      name="language3"
                      onChange={handleChange}
                    />
                  </Form.Item>
                </Form>
              </>
            )}

            {currentStep === "6" && (
              <>
                <h2 className="text-lg font-semibold mb-4">Skills</h2>
                <Form layout="vertical">
                  <Form.Item label="Skill 1">
                    <Input
                      placeholder="Enter first skill"
                      name="skill1"
                      value={formData.skill1}
                      onChange={handleChange}
                    />
                  </Form.Item>
                  <Form.Item label="Skill 2">
                    <Input
                      placeholder="Enter second skill"
                      name="skill2"
                      value={formData.skill2}
                      onChange={handleChange}
                    />
                  </Form.Item>
                  <Form.Item label="Skill 3">
                    <Input
                      placeholder="Enter third skill"
                      name="skill3"
                      value={formData.skill3}
                      onChange={handleChange}
                    />
                  </Form.Item>
                  {/* Submit Button */}
                </Form>
              </>
            )}
            {/* Add other form sections here */}
            <div className="flex justify-end mt-4">
              <Button
                type="primary"
                className="mr-2"
                onClick={() =>
                  setCurrentStep((prev) =>
                    parseInt(prev) > 1 ? `${parseInt(prev) - 1}` : prev
                  )
                }
              >
                Previous
              </Button>
              {currentStep === "6" ? (
                <Button type="primary" onClick={handleSubmit}>
                  Submit
                </Button>
              ) : (
                <Button
                  type="primary"
                  onClick={() =>
                    setCurrentStep((prev) =>
                      parseInt(prev) < 6 ? `${parseInt(prev) + 1}` : prev
                    )
                  }
                >
                  Next
                </Button>
              )}
            </div>
          </div>

          {/* Preview Section */}
          <div
            className="w-1/3 bg-white shadow-md rounded-md p-6 border border-gray-200"
            style={{ color: textColor }}
          >
            <h2 className="text-2xl font-bold">
              {formData.firstName || "Your Name"}
            </h2>
            <p className="text-gray-500">
              {formData.email || "example@example.com"} |{" "}
              {formData.phone || "N/A"} | {formData.city || "City"},{" "}
              {formData.country || "Country"}
            </p>
            <hr className="my-4" />
            <h3 className="text-lg font-semibold">Professional Summary</h3>
            <p>{formData.description || "N/A"}</p>
            <h3 className="text-lg font-semibold mt-4">Skills</h3>
            <ul className="list-disc list-inside">
              <li>{formData.skill1 || "N/A"}</li>
              <li>{formData.skill2 || "N/A"}</li>
              <li>{formData.skill3 || "N/A"}</li>
            </ul>
            {/* Add other sections here */}
          </div>
        </Content>
      </Layout>

      {/* Template Modal */}
      <Modal
        title="Change Template"
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
      >
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Select Template:
          </label>
          <Select
            defaultValue="Template 1"
            className="w-full"
            onChange={handleTemplateChange}
          >
            <Select.Option value="Template 1">Template 1</Select.Option>
            <Select.Option value="Template 2">Template 2</Select.Option>
            <Select.Option value="Template 3">Template 3</Select.Option>
          </Select>
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Text Color:
          </label>
          <input
            type="color"
            value={textColor}
            onChange={handleColorChange}
            className="w-full border border-gray-300 rounded p-1"
          />
        </div>
        <Button
          type="primary"
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium rounded py-2"
          onClick={() => setIsModalVisible(false)}
        >
          Apply
        </Button>
      </Modal>
    </Layout>
  );
}
