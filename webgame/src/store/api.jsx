
import Apex from '../assets/Apex.png';
import CallOfDuty from '../assets/CallOfDuty.jpeg';
import CallOfWarZone from '../assets/WarZone.jpeg';

export const getComments = async () => {
  return [
    {
      id: "1",
      url:CallOfDuty,
      body: "Hello how are you guys",
      username: "Jack",
      userId: "1",
      parentId: null,
      createdAt: new Date().toLocaleString(),
    },
    {
      id: "2",
      url:Apex,
      body: "Hi jack. where are you?",
      username: "hana",
      userId: "2",
      parentId: null,
     createdAt: new Date().toLocaleString(),
    },
    {
      id: "3",
      url:CallOfWarZone,
      body: "Whats up guys? evrything is ok? ",
      username: "John",
      userId: "3",
      parentId: "1",
      createdAt: new Date().toLocaleString(),
    },
    {
      id: "4",
      url:CallOfDuty,
      body: "Hi body how are you today?",
      username: "lona",
      userId: "4",
      parentId: "2",
     createdAt: new Date().toLocaleString(),
    },
  ];
};

export const createComment = async (text, parentId = null) => {
  return {
    id: Math.random().toString(36).substr(2, 9),
    body: text,
    url:CallOfWarZone,
    parentId,
    userId: "1",
    username: "John",
    createdAt: new Date().toISOString(),
  };
};

export const updateComment = async (text) => {
  return { text };
};

export const deleteComment = async () => {
  return {};
};
