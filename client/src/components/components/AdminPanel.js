// src/components/AdminPanel.js
import React, { useEffect, useState } from 'react';
import { Table, Button, message } from 'antd';
import NavBar from './NavBar';
import './AdminPanel.css';
// import 'antd/dist/antd.css';

const AdminPanel = () => {
  const [alumniList, setAlumniList] = useState([]);

  const fetchAlumniList = async () => {
    try {
      const response = await fetch('http://localhost:5000/fetchalumni/alumni');
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      if (data.success) {
        console.log("Sucess");
        setAlumniList(data.alumniList);
        console.log("Sucess");
      } else {
        message.error(data.message);
      }
    } catch (error) {
      console.error('Error fetching alumni list:', error.message);
    }
  };  
  

  const handleVerify = async (userId) => {
    try {
      const response = await fetch(`http://localhost:5000/fetchalumni/verify/${userId}`, {
        method: 'PUT',
      });

      const data = await response.json();

      if (data.success) {
        message.success('User verified successfully');
        fetchAlumniList(); // Refresh alumni list after verification
      } else {
        message.error(data.message);
      }
    } catch (error) {
      console.error('Error verifying user:', error);
    }
  };

  const handleUnverify = async (userId) => {
    try {
      const response = await fetch(`http://localhost:5000/fetchalumni/unverify/${userId}`, {
        method: 'PUT',
      });

      const data = await response.json();

      if (data.success) {
        message.success('User unverified successfully');
        fetchAlumniList(); // Refresh alumni list after unverification
      } else {
        message.error(data.message);
      }
    } catch (error) {
      console.error('Error unverifying user:', error);
    }
  };

  useEffect(() => {
    fetchAlumniList();
  }, []);

  const columns = [
    {
      title: 'Name',
      dataIndex: 'fullName',
      key: 'fullName',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Roll No',
      dataIndex: 'rollNumber',
      key: 'rollNumber',
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
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <span>
          {record.status === 'verified' ? (
            <Button type="unverify-button" onClick={() => handleUnverify(record._id)}>
              Unverify
            </Button>
          ) : (
            <Button type="primary" onClick={() => handleVerify(record._id)}>
              Verify
            </Button>
          )}
        </span>
      ),
    },
  ];

  return (
    <>
      <NavBar />
      <div className="admin-panel-container">
        <h2>Alumni Verification</h2>
        <Table dataSource={alumniList} columns={columns} rowKey="_id" />
      </div>
    </>
  );
};

export default AdminPanel;