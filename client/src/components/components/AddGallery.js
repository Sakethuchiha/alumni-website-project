// src/components/AddGallery.js
import React, { useState } from 'react';
import { Form, Input, Button, DatePicker, Upload, message } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import NavBar from '../components/NavBar';
const AddGallery = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);

  const onFinish = async (values) => {
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append('date', values.date.toISOString()); // Convert date to ISO string
      formData.append('description', values.description);
      formData.append('image', values.image[0].originFileObj);

      const response = await fetch('http://localhost:5000/gallery/add', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.status} - ${response.statusText}`);
      }

      const data = await response.json();

      if (data.success) {
        message.success(data.message);
        form.resetFields();
      } else {
        message.error(data.message);
      }
    } catch (error) {
      console.error('Error during adding gallery item:', error.message);
      message.error('Failed to add gallery item. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <NavBar />
      <div className="add-gallery-container">
        <Form form={form} onFinish={onFinish} encType="multipart/form-data">
          <Form.Item name="date" label="Date">
            <DatePicker style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item name="description" label="Description">
            <Input.TextArea rows={4} />
          </Form.Item>
          <Form.Item name="image" label="Image">
            <Upload name='image' maxCount={1}>
              <Button icon={<PlusOutlined />} />
            </Upload>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" loading={loading}>
              Add
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default AddGallery;
