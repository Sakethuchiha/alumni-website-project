// src/components/AdminUserPanel.js
import React, { useEffect, useState } from 'react';
import { Table, Button, message, Popconfirm } from 'antd';
import NavBar from './NavBar';

const AdminUser = () => {
  const [usersList, setUsersList] = useState([]);

  const fetchUsersList = async () => {
    try {
      const response = await fetch('http://localhost:5000/fetchuser/users');
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      if (data.success) {
        setUsersList(data.usersList);
      } else {
        message.error(data.message);
      }
    } catch (error) {
      console.error('Error fetching users list:', error.message);
    }
  };

  const handleDeleteUser = async (userId) => {
    try {
      const response = await fetch(`http://localhost:5000/fetchuser/deleteUser/${userId}`, {
        method: 'DELETE',
      });

      const data = await response.json();

      if (data.success) {
        message.success('User deleted successfully');
        fetchUsersList(); // Refresh users list after deletion
      } else {
        message.error(data.message);
      }
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  useEffect(() => {
    fetchUsersList();
  }, []);

  const columns = [
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Full Name',
      dataIndex: 'fullName',
      key: 'fullName',
    },
    {
      title: 'Phone Number',
      dataIndex: 'phoneNumber',
      key: 'phoneNumber',
    },
    {
      title: 'Batch Year',
      dataIndex: 'batchYear',
      key: 'batchYear',
    },
    {
      title: 'Department',
      dataIndex: 'department',
      key: 'department',
    },
    {
      title: 'Roll Number',
      dataIndex: 'rollNumber',
      key: 'rollNumber',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <span>
          <Popconfirm
            title="Are you sure you want to delete this user?"
            onConfirm={() => handleDeleteUser(record._id)}
            okText="Yes"
            cancelText="No"
          >
            <Button type="danger">Delete</Button>
          </Popconfirm>
        </span>
      ),
    },
  ];

  return (
    <>
      <NavBar />
      <div className="admin-user-panel-container">
        <h2>User Management</h2>
        <Table dataSource={usersList} columns={columns} rowKey="_id" />
      </div>
    </>
  );
};

export default AdminUser;
