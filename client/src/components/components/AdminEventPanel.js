// src/components/AdminEventPanel.js
import React, { useEffect, useState } from 'react';
import { Table, Button, message, Popconfirm } from 'antd';
import NavBar from './NavBar';

const AdminEventPanel = () => {
  const [eventsList, setEventsList] = useState([]);

  const fetchEventsList = async () => {
    try {
      const response = await fetch('http://localhost:5000/fetchevent/events');
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      if (data.success) {
        setEventsList(data.eventsList);
      } else {
        message.error(data.message);
      }
    } catch (error) {
      console.error('Error fetching events list:', error.message);
    }
  };

  const handleDeleteEvent = async (eventId) => {
    try {
      const response = await fetch(`http://localhost:5000/fetchevent/deleteEvent/${eventId}`, {
        method: 'DELETE',
      });

      const data = await response.json();

      if (data.success) {
        message.success('Event deleted successfully');
        fetchEventsList(); // Refresh events list after deletion
      } else {
        message.error(data.message);
      }
    } catch (error) {
      console.error('Error deleting event:', error);
    }
  };

  useEffect(() => {
    fetchEventsList();
  }, []);

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Date',
      dataIndex: 'date',
      key: 'date',
      render: (date) => new Date(date).toLocaleDateString(),
    },
    {
      title: 'Time',
      dataIndex: 'time',
      key: 'time',
    },
    {
      title: 'Venue',
      dataIndex: 'venue',
      key: 'venue',
    },
    {
      title: 'Alumni Incharge',
      dataIndex: 'alumniIncharge',
      key: 'alumniIncharge',
    },
    {
      title: 'Action',
      key: 'action',
      render: (_, record) => (
        <span>
          <Popconfirm
            title="Are you sure you want to delete this event?"
            onConfirm={() => handleDeleteEvent(record._id)}
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
      <div className="admin-event-panel-container">
        <h2>Event Management</h2>
        <Table dataSource={eventsList} columns={columns} rowKey="_id" />
      </div>
    </>
  );
};

export default AdminEventPanel;