import React, { useEffect } from "react";
import { useState } from "react";
const tableData = [
  {
    name: "Laura Bran",
    image:
      "https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80",
    job: "Marketing Director",
    team: "Support",
    manager: "Evondev",
    emaill: "laurabran@gmail.com",
  },
  {
    name: "Violet",
    image:
      "https://images.unsplash.com/photo-1474073705359-5da2a8270c64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=692&q=80",
    job: "Marketing Director",
    team: "Support",
    manager: "Evondev",
    emaill: "laurabran@gmail.com",
  },
  {
    name: "Maria",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    job: "Marketing Director",
    team: "Support",
    manager: "Evondev",
    emaill: "laurabran@gmail.com",
  },
];
const tableData2 = [
  {
    name: "Laura Bran",
    image:
      "https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80",
    job: "Marketing Director Marketing Director",
    team: "Support",
    manager: "Evondev",
    emaill: "laurabran@gmail.com",
  },
  {
    name: "Violet",
    image:
      "https://images.unsplash.com/photo-1474073705359-5da2a8270c64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=692&q=80",
    job: "Marketing Director Marketing Director",
    team: "Support",
    manager: "Evondev",
    emaill: "laurabran@gmail.com",
  },
  {
    name: "Maria",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
    job: "Marketing Director Marketing Director Marketing Director Marketing Director Marketing Director Marketing Director Marketing Director Marketing Director",
    team: "Support",
    manager: "Evondev",
    emaill: "laurabran@gmail.com",
  },
];
const App = () => {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState(tableData);
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  const handleTabItemClick = (data) => {
    setUsers(data);
  };
  return (
    <div>
      <div className="flex items-center mb-5 gap-x-5">
        <TabItem onClick={() => handleTabItemClick(tableData)}>Data1</TabItem>
        <TabItem onClick={() => handleTabItemClick(tableData2)}>Data2</TabItem>
        <TabItem>Data3</TabItem>
      </div>
      <div className="w-full overflow-x-auto">
        <table className="table-users">
          <thead>
            <tr>
              <th>Employee</th>
              <th>Job title</th>
              <th>Team</th>
              <th>Manager</th>
              <th>Email address</th>
            </tr>
          </thead>
          <tbody>
            {!loading &&
              users.map((item) => (
                <tr key={item.name}>
                  <td>
                    <div className="flex items-center gap-x-3">
                      <img
                        src={item.image}
                        className="flex-shrink-0 object-cover w-10 h-10 rounded"
                        alt=""
                      />
                      <span>{item.name}</span>
                    </div>
                  </td>
                  <td>
                    <div className="truncate max-w-[100px] lg:max-w-full">
                      {item.job}
                    </div>
                  </td>
                  <td>{item.team}</td>
                  <td>{item.manager}</td>
                  <td>{item.emaill}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

function TabItem({ children, onClick = () => null }) {
  return (
    <div
      className="px-6 py-2 text-sm bg-gray-200 rounded cursor-pointer hover:bg-blue-500 hover:text-white"
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export default App;
