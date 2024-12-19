import React, { useEffect, useState } from 'react';

const Dashboard = () => {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const url = "https://dummyjson.com/recipes";
        const fetchData = async () => {
            try {
                const res = await fetch(url);
                const data = await res.json();
                setRecipes(data.recipes || []);
            } catch (error) {
                console.error("Error fetching recipes:", error);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, []);

    const tableStyle = {
        width: "80%",
        margin: "20px auto",
        borderCollapse: "collapse",
        fontFamily: "Arial, sans-serif",
    };

    const thStyle = {
        backgroundColor: "#f4f4f4",
        color: "#333",
        padding: "10px",
        border: "1px solid #ddd",
        textAlign: "center",
    };

    const tdStyle = {
        padding: "10px",
        border: "1px solid #ddd",
        textAlign: "center",
    };

    const imgStyle = {
        borderRadius: "5px",
    };

    const headerStyle = {
        textAlign: "center",
        fontFamily: "Arial, sans-serif",
        color: "#333",
    };

    if (loading) {
        return <p style={{ textAlign: "center" }}>Loading recipes...</p>;
    }

    return (
        <div>
            <h1 style={headerStyle}>Restaurant Menu</h1>
            {recipes.length === 0 ? (
                <p style={{ textAlign: "center" }}>No recipes available.</p>
            ) : (
                <table style={tableStyle}>
                    <thead>
                        <tr>
                            <th style={thStyle}>&nbsp;</th>
                            <th style={thStyle}>Recipe Name</th>
                            <th style={thStyle}>Cuisine</th>
                            <th style={thStyle}>Rating</th>
                            <th style={thStyle}>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {recipes.map((r) => (
                            <tr key={r.id}>
                                <td style={tdStyle}>
                                    <img
                                        src={r.image}
                                        width="100"
                                        height="50"
                                        alt={r.name}
                                        style={imgStyle}
                                    />
                                </td>
                                <td style={tdStyle}>{r.name}</td>
                                <td style={tdStyle}>{r.cuisine}</td>
                                <td style={tdStyle}>{r.rating}</td>
                                <td style={tdStyle}>
                                    <button>Add to cart</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default Dashboard;
