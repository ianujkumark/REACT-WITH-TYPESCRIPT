import React from "react";

const NavBar3: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "white",
        padding: "8px 20px",
        borderBottom: "1px solid #e5e5e5",
      }}
    >
      {/* Left Side */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          flexDirection: "column",
        }}
      >
        <span style={{ fontSize: "12px", color: "gray" }}>
          <strong>R17 | 19 – 21 SEP</strong>
        </span>
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/d/dd/Flag_of_Azerbaijan.svg"
            alt="flag"
            style={{ width: "20px", height: "14px", marginLeft: "28px" }}
          />
          <span style={{ fontWeight: "bold", fontSize: "14px" }}>
            Azerbaijan
          </span>
          <span style={{ fontSize: "14px", marginLeft: "4px" }}>›</span>
        </div>
      </div>

      {/* Right Side */}
      <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
        <div>
            <img
            src="https://www.formula1.com/assets/home/_next/static/media/tagShield.19c32883.svg"
            alt="flag"
            style={{ width: "50px", height: "24px" }}
          />
          </div>
        <div style={{ textAlign: "right"}}>
          <div style={{ fontSize: "12px", fontWeight: "bold" }}>
            ● MY TIME <span style={{ marginLeft: "5px" }}>15:08</span>
          </div>
          <div style={{ fontSize: "11px", color: "gray" }}>
            TRACK TIME <span style={{ marginLeft: "5px" }}>13:38</span>
          </div>
        </div>
        <div>
            <img
            src="https://www.formula1.com/assets/home/_next/static/media/tagShield.19c32883.svg"
            alt="flag"
            style={{ width: "50px", height: "24px" }}
          />
          </div>
      </div>
    </div>
  );
};

export default NavBar3;
