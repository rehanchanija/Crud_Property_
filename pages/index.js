import { deleteProperty, fetchPropertyList } from "@/utils/api";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { Alert, Button, Table } from "antd";
import { useEffect, useState } from "react";
import CreatePropertyForm from "./createProperty";

export default function Home() {
  const queryClient = useQueryClient();
  const [search, setSearch] = useState("");

  const { data, isLoading, error, refetch } = useQuery({
    queryKey: ["propertyList", search],
    queryFn: () => fetchPropertyList(search),
  });

  const [isDrawerVisible, setIsDrawerVisible] = useState(false);
  const [initialData, setInitialData] = useState(null);

  // Open drawer
  const showDrawer = () => {
    setIsDrawerVisible(true);
  };

  // Close drawer
  const closeDrawer = () => {
    setIsDrawerVisible(false);
  };

  // Handle action click (Edit or Delete)
  const handleActionClick = async (key, record) => {
    if (key === "edit") {
      setInitialData(record);
      showDrawer();
    } else if (key === "delete") {
      // Confirm before deletion
      const confirmDelete = window.confirm(
        `Are you sure you want to delete the property "${record.name}"?`
      );
      if (confirmDelete) {
        deleteProperty(record._id).then(() => {
          queryClient.invalidateQueries("propertyList");
        });
      }
    }
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      render: (name, record) => {
        const imageUrl = record.images && record.images[0];
        return (
          <div className="flex items-center space-x-2">
            {imageUrl && (
              <img
                src={imageUrl}
                alt="Property"
                style={{ width: 50, height: 50, objectFit: "cover" }}
              />
            )}
            <span>{name}</span>
          </div>
        );
      },
    },
    {
      title: "Category",
      dataIndex: "category",
      render: (category) => category || "N/A",
    },
    {
      title: "For Type",
      dataIndex: "for_type",
    },
    {
      title: "Price",
      dataIndex: "price",
      render: (price) => `₹${price}`,
    },
    {
      title: "Location",
      dataIndex: "location",
    },
    {
      title: "Area",
      dataIndex: "area",
      render: (area) => `${area} sq.ft.`,
    },
    {
      title: "Rating",
      dataIndex: "rating",
    },
    {
      title: "Action",
      render: (_, record) => (
        <div>
          <Button type="link" onClick={() => handleActionClick("edit", record)}>
            Edit
          </Button>
          <Button
            className="text-red-500"
            onClick={() => handleActionClick("delete", record)}
          >
            Delete
          </Button>
        </div>
      ),
    },
  ];

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      refetch();
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [search, refetch]);

  if (error) {
    return (
      <div style={{ textAlign: "center", marginTop: 50 }}>
        <Alert
          message="Error"
          description="Failed to load property data."
          type="error"
          showIcon
        />
      </div>
    );
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Property List</h1>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          marginBottom: 20,
        }}
      >
        <input
          type="text"
          placeholder="Search"
          style={{
            marginRight: 10,
            padding: 5,
            border: "1px solid #ccc",
            borderRadius: 5,
          }}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button type="primary" onClick={showDrawer}>
          Add Property
        </Button>
      </div>

      <Table
        dataSource={data?.data}
        columns={columns}
        rowKey="id"
        loading={isLoading}
        style={{ marginTop: 20 }}
      />
      <CreatePropertyForm
        visible={isDrawerVisible}
        onClose={closeDrawer}
        initialData={initialData} // Pass the initial data for editing
      />
    </div>
  );
}
