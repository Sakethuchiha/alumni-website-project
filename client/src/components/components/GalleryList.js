// src/components/GalleryList.js
import React, { useState, useEffect } from 'react';
import { List, Button, Modal, Form, Input, DatePicker, Upload, message } from 'antd';
import { EditOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import NavBar from '../components/NavBar';

const GalleryList = () => {
  const [galleryData, setGalleryData] = useState([]);
  const [editForm] = Form.useForm();
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const fetchGalleryData = async () => {
    try {
      const response = await fetch('http://localhost:5000/gallery');
      const data = await response.json();

      if (data.success) {
        setGalleryData(data.galleryItems);
      } else {
        message.error(data.message);
      }
    } catch (error) {
      console.error('Error during fetching gallery data:', error);
    }
  };

  useEffect(() => {
    fetchGalleryData();
  }, []);
  const showEditModal = (item) => {
    editForm.setFieldsValue(item);
    showModal();
  };
  const onFinishEdit = async (values) => {
    try {
      const response = await fetch('http://localhost:5000/gallery/update', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();

      if (data.success) {
        message.success(data.message);
        setIsModalVisible(false);
        fetchGalleryData(); // Reload gallery data after update
      } else {
        message.error(data.message);
      }
    } catch (error) {
      console.error('Error during updating gallery item:', error);
    }
  };

  const onDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/gallery/delete/${id}`, {
        method: 'DELETE',
      });

      const data = await response.json();

      if (data.success) {
        message.success(data.message);
        fetchGalleryData(); // Reload gallery data after delete
      } else {
        message.error(data.message);
      }
    } catch (error) {
      console.error('Error during deleting gallery item:', error);
    }
  };
  const columns = [
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (text, item) => (
        <div className="action-buttons">
          <Button
            icon={<EditOutlined />}
            onClick={() => showEditModal(item)}
            className="edit-button"
          />
          <Button
            icon={<DeleteOutlined />}
            onClick={() => onDelete(item._id)}
            className="delete-button"
          />
        </div>
      ),
    },
  ];

  return (<>
  <NavBar/>
    <div className="gallery-list-container">
      <List
        dataSource={galleryData}
        columns={columns}
        rowKey="_id"
        pagination={{ pageSize: 5 }}
      />

      <Modal
        title="Edit Gallery Item"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={null}
      >
        <Form form={editForm} onFinish={onFinishEdit}>
          <Form.Item name="_id" hidden>
            <Input />
          </Form.Item>
          <Form.Item name="date" label="Date">
            <DatePicker style={{ width: '100%' }} />
          </Form.Item>
          <Form.Item name="description" label="Description">
            <Input.TextArea rows={4} />
          </Form.Item>
          <Form.Item name="image" label="Image">
            <Upload>
              <Button icon={<PlusOutlined />} />
            </Upload>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Update
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
    </>
  );

};

export default GalleryList;












// // src/components/GalleryList.js
// import React, { useState, useEffect } from 'react';
// import { List, Button, Modal, Form, Input, DatePicker, Upload, message } from 'antd';
// import { EditOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';

// const GalleryList = () => {
//   const [galleryData, setGalleryData] = useState([]);
//   const [editForm] = Form.useForm();
//   const [isModalVisible, setIsModalVisible] = useState(false);

//   const showModal = () => {
//     setIsModalVisible(true);
//   };

//   const handleCancel = () => {
//     setIsModalVisible(false);
//   };

//   const fetchGalleryData = async () => {
//     try {
//       const response = await fetch('http://localhost:5000/gallery');
//       const data = await response.json();

//       if (data.success) {
//         setGalleryData(data.galleryItems);
//       } else {
//         message.error(data.message);
//       }
//     } catch (error) {
//       console.error('Error during fetching gallery data:', error);
//     }
//   };

//   useEffect(() => {
//     fetchGalleryData();
//   }, []);

//   // Static gallery items for demonstration
//   const staticGalleryItems = [
//     {
//       _id: '1',
//       date: '2023-01-01',
//       description: 'Static Gallery Item 1',
//       image: 'https://images.app.goo.gl/DNrpcAHaDxqExzco9', // Placeholder image URL
//     },
//     {
//       _id: '2',
//       date: '2023-02-01',
//       description: 'Static Gallery Item 2',
//       image: 'https://images.app.goo.gl/UyHef1xSff2sqHSR6', // Placeholder image URL
//     },
//     {
//       _id: '3',
//       date: '2023-03-01',
//       description: 'Static Gallery Item 3',
//       image: 'https://images.app.goo.gl/d6zUVevbvPtNV1V8A', // Placeholder image URL
//     },
//     {
//       _id: '4',
//       date: '2023-04-01',
//       description: 'Static Gallery Item 4',
//       image: 'https://images.app.goo.gl/XFrsgauqHnJy2HGJ80', // Placeholder image URL
//     },
//     {
//       _id: '5',
//       date: '2023-05-01',
//       description: 'Static Gallery Item 5',
//       image: 'https://images.app.goo.gl/KXwQes79BXffpXSd7', // Placeholder image URL
//     },
//   ];
  
//   const columns = [
//     {
//       title: 'Date',
//       dataIndex: 'date',
//       key: 'date',
//     },
//     {
//       title: 'Description',
//       dataIndex: 'description',
//       key: 'description',
//     },
//     {
//       title: 'Actions',
//       key: 'actions',
//       render: (text, item) => (
//         <div className="action-buttons">
//           <Button
//             icon={<EditOutlined />}
//             onClick={() => showEditModal(item)}
//             className="edit-button"
//           />
//           <Button
//             icon={<DeleteOutlined />}
//             onClick={() => onDelete(item._id)}
//             className="delete-button"
//           />
//         </div>
//       ),
//     },
//   ];
  
//   // ...
  

//   return (
//     <div className="gallery-list-container">
//       <List
//         dataSource={galleryData.length > 0 ? galleryData : staticGalleryItems}
//         columns={columns}
//         rowKey="_id"
//         pagination={{ pageSize: 5 }}
//       />

//       <Modal
//         title="Edit Gallery Item"
//         visible={isModalVisible}
//         onCancel={handleCancel}
//         footer={null}
//       >
//         <Form form={editForm} onFinish={onFinishEdit}>
//           <Form.Item name="_id" hidden>
//             <Input />
//           </Form.Item>
//           <Form.Item name="date" label="Date">
//             <DatePicker style={{ width: '100%' }} />
//           </Form.Item>
//           <Form.Item name="description" label="Description">
//             <Input.TextArea rows={4} />
//           </Form.Item>
//           <Form.Item name="image" label="Image">
//             <Upload>
//               <Button icon={<PlusOutlined />} />
//             </Upload>
//           </Form.Item>
//           <Form.Item>
//             <Button type="primary" htmlType="submit">
//               Update
//             </Button>
//           </Form.Item>
//         </Form>
//       </Modal>
//     </div>
//   );
// };

// export default GalleryList;


// src/components/GalleryList.js
// import React, { useState, useEffect } from 'react';
// import { List, Button, Modal, Form, Input, DatePicker, Upload, message } from 'antd';
// import { EditOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';

// const GalleryList = () => {
//   const [galleryData, setGalleryData] = useState([]);
//   const [editForm] = Form.useForm();
//   const [isModalVisible, setIsModalVisible] = useState(false);

//   const showModal = () => {
//     setIsModalVisible(true);
//   };

//   const handleCancel = () => {
//     setIsModalVisible(false);
//   };

//   useEffect(() => {
//     // No need to fetch data for static content
//     // setGalleryData(data.galleryItems);
//   }, []);

//   // Static gallery items for demonstration
//   const staticGalleryItems = [
//     {
//       _id: '1',
//       date: '2023-01-01',
//       description: 'Static Gallery Item 1',
//       image: 'https://images.app.goo.gl/DNrpcAHaDxqExzco9', // Placeholder image URL
//     },
//     {
//       _id: '2',
//       date: '2023-02-01',
//       description: 'Static Gallery Item 2',
//       image: 'https://images.app.goo.gl/UyHef1xSff2sqHSR6', // Placeholder image URL
//     },
//     {
//       _id: '3',
//       date: '2023-03-01',
//       description: 'Static Gallery Item 3',
//       image: 'https://images.app.goo.gl/d6zUVevbvPtNV1V8A', // Placeholder image URL
//     },
//     {
//       _id: '4',
//       date: '2023-04-01',
//       description: 'Static Gallery Item 4',
//       image: 'https://images.app.goo.gl/XFrsgauqHnJy2HGJ80', // Placeholder image URL
//     },
//     {
//       _id: '5',
//       date: '2023-05-01',
//       description: 'Static Gallery Item 5',
//       image: 'https://images.app.goo.gl/KXwQes79BXffpXSd7', // Placeholder image URL
//     },
//   ];
  
//   const columns = [
//     {
//       title: 'Date',
//       dataIndex: 'date',
//       key: 'date',
//     },
//     {
//       title: 'Description',
//       dataIndex: 'description',
//       key: 'description',
//     },
//     {
//       title: 'Actions',
//       key: 'actions',
//       render: (text, item) => (
//         <div className="action-buttons">
//           <Button
//             icon={<EditOutlined />}
//             onClick={() => ShowEditModal(item)}
//             className="edit-button"
//           />
//           <Button
//             icon={<DeleteOutlined />}
//             onClick={() => onDelete(item._id)}
//             className="delete-button"
//           />
//         </div>
//       ),
//     },
//   ];

//   return (
//     <div className="gallery-list-container">
//       <List
//         dataSource={staticGalleryItems}
//         columns={columns}
//         rowKey="_id"
//         pagination={{ pageSize: 5 }}
//       />

//       <Modal
//         title="Edit Gallery Item"
//         visible={isModalVisible}
//         onCancel={handleCancel}
//         footer={null}
//       >
//         <Form form={editForm} onFinish={onFinishEdit}>
//           <Form.Item name="_id" hidden>
//             <Input />
//           </Form.Item>
//           <Form.Item name="date" label="Date">
//             <DatePicker style={{ width: '100%' }} />
//           </Form.Item>
//           <Form.Item name="description" label="Description">
//             <Input.TextArea rows={4} />
//           </Form.Item>
//           <Form.Item name="image" label="Image">
//             <Upload>
//               <Button icon={<PlusOutlined />} />
//             </Upload>
//           </Form.Item>
//           <Form.Item>
//             <Button type="primary" htmlType="submit">
//               Update
//             </Button>
//           </Form.Item>
//         </Form>
//       </Modal>
//     </div>
//   );
// };

// export default GalleryList;
// src/components/GalleryList.js
// import React, { useState, useEffect } from 'react';
// import { List, Button, Modal, Form, Input, DatePicker, Upload, message } from 'antd';
// import { EditOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';

// const GalleryList = () => {
//   const [galleryData, setGalleryData] = useState([]);
//   const [editForm] = Form.useForm();
//   const [isModalVisible, setIsModalVisible] = useState(false);

//   const showModal = () => {
//     setIsModalVisible(true);
//   };

//   const handleCancel = () => {
//     setIsModalVisible(false);
//   };

//   useEffect(() => {
//     // No need to fetch data for static content
//     // setGalleryData(data.galleryItems);
//   }, []);

//   // Static gallery items for demonstration
//   const staticGalleryItems = [
//     {
//       _id: '1',
//       date: '2023-01-01',
//       description: 'Static Gallery Item 1',
//       image: 'https://images.app.goo.gl/DNrpcAHaDxqExzco9', // Placeholder image URL
//     },
//     {
//       _id: '2',
//       date: '2023-02-01',
//       description: 'Static Gallery Item 2',
//       image: 'https://images.app.goo.gl/UyHef1xSff2sqHSR6', // Placeholder image URL
//     },
//     {
//       _id: '3',
//       date: '2023-03-01',
//       description: 'Static Gallery Item 3',
//       image: 'https://images.app.goo.gl/d6zUVevbvPtNV1V8A', // Placeholder image URL
//     },
//     {
//       _id: '4',
//       date: '2023-04-01',
//       description: 'Static Gallery Item 4',
//       image: 'https://images.app.goo.gl/XFrsgauqHnJy2HGJ80', // Placeholder image URL
//     },
//     {
//       _id: '5',
//       date: '2023-05-01',
//       description: 'Static Gallery Item 5',
//       image: 'https://images.app.goo.gl/KXwQes79BXffpXSd7', // Placeholder image URL
//     },
//   ];

//   const showEditModal = (item) => {
//     editForm.setFieldsValue(item);
//     showModal();
//   };

//   const onFinishEdit = async (values) => {
//     try {
//       const response = await fetch('http://localhost:5000/gallery/update', {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(values),
//       });

//       const data = await response.json();

//       if (data.success) {
//         message.success(data.message);
//         setIsModalVisible(false);
//         // fetchGalleryData(); // Uncomment if you decide to fetch data dynamically
//       } else {
//         message.error(data.message);
//       }
//     } catch (error) {
//       console.error('Error during updating gallery item:', error);
//     }
//   };

//   const onDelete = async (id) => {
//     try {
//       const response = await fetch(`http://localhost:5000/gallery/delete/${id}`, {
//         method: 'DELETE',
//       });

//       const data = await response.json();

//       if (data.success) {
//         message.success(data.message);
//         // fetchGalleryData(); // Uncomment if you decide to fetch data dynamically
//       } else {
//         message.error(data.message);
//       }
//     } catch (error) {
//       console.error('Error during deleting gallery item:', error);
//     }
//   };

//   const columns = [
//     {
//       title: 'Date',
//       dataIndex: 'date',
//       key: 'date',
//     },
//     {
//       title: 'Description',
//       dataIndex: 'description',
//       key: 'description',
//     },
//     {
//       title: 'Actions',
//       key: 'actions',
//       render: (text, item) => (
//         <div className="action-buttons">
//           <Button
//             icon={<EditOutlined />}
//             onClick={() => showEditModal(item)}
//             className="edit-button"
//           />
//           <Button
//             icon={<DeleteOutlined />}
//             onClick={() => onDelete(item._id)}
//             className="delete-button"
//           />
//         </div>
//       ),
//     },
//   ];

//   return (
//     <div className="gallery-list-container">
//       <List
//         dataSource={staticGalleryItems}
//         columns={columns}
//         rowKey="_id"
//         pagination={{ pageSize: 5 }}
//       />

//       <Modal
//         title="Edit Gallery Item"
//         visible={isModalVisible}
//         onCancel={handleCancel}
//         footer={null}
//       >
//         <Form form={editForm} onFinish={onFinishEdit}>
//           <Form.Item name="_id" hidden>
//             <Input />
//           </Form.Item>
//           <Form.Item name="date" label="Date">
//             <DatePicker style={{ width: '100%' }} />
//           </Form.Item>
//           <Form.Item name="description" label="Description">
//             <Input.TextArea rows={4} />
//           </Form.Item>
//           <Form.Item name="image" label="Image">
//             <Upload>
//               <Button icon={<PlusOutlined />} />
//             </Upload>
//           </Form.Item>
//           <Form.Item>
//             <Button type="primary" htmlType="submit">
//               Update
//             </Button>
//           </Form.Item>
//         </Form>
//       </Modal>
//     </div>
//   );
// };

// export default GalleryList;
