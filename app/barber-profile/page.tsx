import Link from "next/link";

export default function BarberProfilePage() {
  const barbers = [
    {
      id: 1,
      name: "Mike The Barber",
      location: "New York, NY",
      specialty: "Fades & Designs",
      experience: "12 years",
      rating: 4.9,
      instagram: "@mikethebarber",
      image: "/images/barber1.jpg",
    },
    {
      id: 2,
      name: "Sarah Cuts",
      location: "Los Angeles, CA",
      specialty: "Women's Cuts & Color",
      experience: "8 years",
      rating: 4.8,
      instagram: "@sarahcuts",
      image: "/images/barber2.jpg",
    },
    {
      id: 3,
      name: "Big Al",
      location: "Chicago, IL",
      specialty: "Beards & Hot Towels",
      experience: "15 years",
      rating: 5.0,
      instagram: "@bigalbarber",
      image: "/images/barber3.jpg",
    },
  ];

  return (
    <main
      style={{
        background: "#0a0a0a",
        color: "white",
        minHeight: "100vh",
        padding: "60px 20px",
        fontFamily: "sans-serif",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <h1
          style={{
            fontSize: "42px",
            fontWeight: "700",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          Featured Barbers
        </h1>

        <p
          style={{
            textAlign: "center",
            opacity: 0.7,
            marginBottom: "50px",
            fontSize: "18px",
          }}
        >
          Top professionals using our recommended tools
        </p>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "30px",
          }}
        >
          {barbers.map((barber) => (
            <div
              key={barber.id}
              style={{
                background: "#1a1a1a",
                borderRadius: "12px",
                padding: "30px",
                textAlign: "center",
                border: "1px solid #333",
              }}
            >
              <div
                style={{
                  width: "120px",
                  height: "120px",
                  borderRadius: "50%",
                  background: "linear-gradient(135deg, #facc15 0%, #333 100%)",
                  margin: "0 auto 20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: "48px",
                }}
              >
                💈
              </div>

              <h3 style={{ fontSize: "24px", marginBottom: "5px", fontWeight: "600" }}>
                {barber.name}
              </h3>

              <p style={{ opacity: 0.6, fontSize: "14px", marginBottom: "15px" }}>
                {barber.location}
              </p>

              <div
                style={{
                  background: "#0a0a0a",
                  borderRadius: "8px",
                  padding: "15px",
                  marginBottom: "15px",
                  textAlign: "left",
                }}
              >
                <p style={{ fontSize: "14px", marginBottom: "5px" }}>
                  <span style={{ opacity: 0.5 }}>Specialty:</span> {barber.specialty}
                </p>
                <p style={{ fontSize: "14px", marginBottom: "5px" }}>
                  <span style={{ opacity: 0.5 }}>Experience:</span> {barber.experience}
                </p>
                <p style={{ fontSize: "14px" }}>
                  <span style={{ opacity: 0.5 }}>Instagram:</span>{" "}
                  <a
                    href={`https://instagram.com/${barber.instagram.replace("@", "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ color: "#facc15", textDecoration: "none" }}
                  >
                    {barber.instagram}
                  </a>
                </p>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "5px",
                  marginBottom: "20px",
                }}
              >
                <span style={{ color: "#facc15", fontSize: "20px" }}>★</span>
                <span style={{ fontSize: "20px", fontWeight: "700" }}>{barber.rating}</span>
                <span style={{ opacity: 0.5 }}>/ 5.0</span>
              </div>

              <Link
                href={`/barbers/${barber.id}`}
                style={{
                  display: "inline-block",
                  background: "#facc15",
                  color: "black",
                  padding: "12px 24px",
                  borderRadius: "8px",
                  textDecoration: "none",
                  fontWeight: "700",
                  fontSize: "14px",
                }}
              >
                View Profile
              </Link>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "60px", paddingTop: "40px", borderTop: "1px solid #333" }}>
          <Link
            href="/"
            style={{
              color: "white",
              textDecoration: "none",
              opacity: 0.7,
              fontSize: "16px",
            }}
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}