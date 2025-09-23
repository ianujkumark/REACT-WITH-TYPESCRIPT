const InfoCard: React.FC<{ img: string; data: string }> = ({ img, data }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
        marginRight: "10px",
        borderRadius: "10px",
        backgroundColor: "white",
        marginLeft: "10px",
      }}
    >
      <div>
        <img src={img} style={{ borderRadius: "10px" }} height="100px" />
      </div>
      <div style={{ marginLeft: "5px" }}>
        <span>{data}</span>
      </div>
    </div>
  );
};

const MainBody: React.FC = () => {
  return (
    <div
      style={{
        margin: "30px",
        marginLeft: "10px",
        display: "flex",
        flexDirection: "row",
        gap: "10px",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.5)",
        borderRadius: "12px",
      }}
    >
      <div style={{ position: "relative" }}>
        <img
          src="https://i.pinimg.com/1200x/3f/22/4d/3f224d8449cec2016927efacb5d41758.jpg"
          width="1000px"
          height="600px"
          style={{ borderRadius: "10px" }}
        />
        <span
          style={{
            position: "absolute",
            bottom: "10px",
            left: "20px",
            color: "white",
            fontSize: "22px",
            fontWeight: "bold",
            background: "rgba(0, 0, 0, 0.5)", // dark background for readability
            padding: "6px 12px",
            borderRadius: "6px",
          }}
        >
          F1 Formulae Racing
        </span>
      </div>
      <div
        style={{
          display: "flex",
          gap: "16px",
          boxShadow: "0px 2px 8px rgba(0, 0, 0, 0.1)",
          marginRight: "10px",
          flexDirection: "column",
        }}
      >
        <span></span>
        <InfoCard
          img="https://media.formula1.com/image/upload/t_16by9Centre/c_fill,w_192,h_192,g_faces/q_auto/v1740000000/trackside-images/2025/F1_Grand_Prix_of_Italy___Previews/2233651472.webp"
          data="Getting To Know the Franco Colapinto"
        />
        <InfoCard
          img="https://media.formula1.com/image/upload/c_fill,w_192,h_192,g_faces/q_auto/v1740000000/fom-website/2025/25%20Greatest%20Races/8.%20Brazil%202012/Display%20Greatest%20Races%20(6).webp"
          data="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, dicta."
        />

        <InfoCard
          img="https://media.formula1.com/image/upload/t_16by9Centre/c_fill,w_192,h_192,g_faces/q_auto/v1740000000/trackside-images/2025/F1_Grand_Prix_of_Italy___Previews/2233651472.webp"
          data="Getting To Know the Franco Colapinto"
        />
        <InfoCard
          img="https://media.formula1.com/image/upload/c_fill,w_192,h_192,g_faces/q_auto/v1740000000/fom-website/2025/25%20Greatest%20Races/8.%20Brazil%202012/Display%20Greatest%20Races%20(6).webp"
          data="Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia, dicta."
        />

        <InfoCard
          img="https://media.formula1.com/image/upload/t_16by9Centre/c_fill,w_192,h_192,g_faces/q_auto/v1740000000/trackside-images/2025/F1_Grand_Prix_of_Italy___Previews/2233651472.webp"
          data="Getting To Know the Franco Colapinto"
        />
      </div>
    </div>
  );
};

export default MainBody;
