```tsx
import { useNavigate } from "react-router-dom";

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#f7f6f1",
        color: "#27332f",
      }}
    >
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "24px 40px",
        }}
      >
        <div>
          <div
            style={{
              fontSize: "20px",
              fontWeight: 600,
            }}
          >
            Aurelia
          </div>

          <div
            style={{
              fontSize: "12px",
              color: "#87938c",
              marginTop: "4px",
            }}
          >
            Your gentle workspace
          </div>
        </div>

        <button
          type="button"
          onClick={() => navigate("/login")}
          style={{
            padding: "10px 20px",
            borderRadius: "999px",
            border: "1px solid #d7d1c6",
            backgroundColor: "#ffffff",
            cursor: "pointer",
            fontSize: "14px",
          }}
        >
          Log in
        </button>
      </header>

      <main
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "60px 40px",
          display: "flex",
          alignItems: "center",
          gap: "60px",
          flexWrap: "wrap",
        }}
      >
        <section
          style={{
            flex: "1 1 500px",
          }}
        >
          <div
            style={{
              display: "inline-block",
              padding: "8px 14px",
              borderRadius: "999px",
              border: "1px solid #d8d3c9",
              backgroundColor: "#ffffff",
              color: "#718078",
              fontSize: "12px",
              marginBottom: "24px",
            }}
          >
            Productivity without the pressure
          </div>

          <h1
            style={{
              fontSize: "72px",
              lineHeight: "0.98",
              fontWeight: 500,
              margin: "0 0 28px",
            }}
          >
            Get things done.
            <br />
            <span style={{ color: "#75847c" }}>
              Stay human.
            </span>
          </h1>

          <p
            style={{
              maxWidth: "560px",
              fontSize: "18px",
              lineHeight: 1.7,
              color: "#718078",
            }}
          >
            Aurelia brings your tasks, energy, focus
            and moments of calm into one beautifully
            simple workspace.
          </p>

          <div
            style={{
              display: "flex",
              gap: "12px",
              flexWrap: "wrap",
              marginTop: "32px",
            }}
          >
            <button
              type="button"
              onClick={() => navigate("/signup")}
              style={{
                padding: "14px 24px",
                borderRadius: "999px",
                border: "none",
                backgroundColor: "#27332f",
                color: "#ffffff",
                cursor: "pointer",
                fontSize: "14px",
              }}
            >
              Create your space →
            </button>

            <button
              type="button"
              onClick={() => navigate("/login")}
              style={{
                padding: "14px 24px",
                borderRadius: "999px",
                border: "1px solid #d3cec4",
                backgroundColor: "#ffffff",
                color: "#27332f",
                cursor: "pointer",
                fontSize: "14px",
              }}
            >
              I already have an account
            </button>
          </div>

          <div
            style={{
              display: "flex",
              gap: "20px",
              flexWrap: "wrap",
              marginTop: "32px",
              color: "#7b8781",
              fontSize: "13px",
            }}
          >
            <span>✓ Simple by design</span>
            <span>✓ Your data stays yours</span>
            <span>✓ Built for real days</span>
          </div>
        </section>

        <section
          style={{
            flex: "1 1 350px",
            maxWidth: "440px",
          }}
        >
          <div
            style={{
              borderRadius: "32px",
              backgroundColor: "#faf9f5",
              padding: "28px",
              boxShadow:
                "0 30px 70px rgba(61,66,58,0.14)",
            }}
          >
            <div
              style={{
                fontSize: "12px",
                color: "#8a958f",
              }}
            >
              TODAY
            </div>

            <h2
              style={{
                margin: "6px 0 0",
                fontSize: "28px",
                fontWeight: 500,
              }}
            >
              Your pace
            </h2>

            <div
              style={{
                marginTop: "24px",
                padding: "22px",
                borderRadius: "24px",
                backgroundColor: "#e9f0e5",
              }}
            >
              <div
                style={{
                  fontSize: "14px",
                  color: "#66766b",
                }}
              >
                Life weather
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-end",
                  marginTop: "8px",
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: "36px",
                      fontWeight: 500,
                    }}
                  >
                    Clear
                  </div>

                  <div
                    style={{
                      marginTop: "4px",
                      fontSize: "13px",
                      color: "#718078",
                    }}
                  >
                    Good energy today
                  </div>
                </div>

                <div style={{ fontSize: "42px" }}>
                  ☀️
                </div>
              </div>
            </div>

            <div
              style={{
                marginTop: "18px",
                padding: "20px",
                borderRadius: "24px",
                border: "1px solid #e4dfd5",
                backgroundColor: "#ffffff",
              }}
            >
              <div
                style={{
                  fontWeight: 500,
                  marginBottom: "16px",
                }}
              >
                Today's focus
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                }}
              >
                <div
                  style={{
                    padding: "12px",
                    borderRadius: "14px",
                    backgroundColor: "#f4f2ed",
                    textDecoration: "line-through",
                    color: "#9aa39e",
                  }}
                >
                  ✓ Finish project proposal
                </div>

                <div
                  style={{
                    padding: "12px",
                    borderRadius: "14px",
                    backgroundColor: "#f4f2ed",
                  }}
                >
                  ○ Read for 20 minutes
                </div>

                <div
                  style={{
                    padding: "12px",
                    borderRadius: "14px",
                    backgroundColor: "#f4f2ed",
                  }}
                >
                  ○ Take an evening walk
                </div>
              </div>
            </div>

            <div
              style={{
                marginTop: "18px",
                padding: "16px",
                borderRadius: "22px",
                backgroundColor: "#f1e8df",
              }}
            >
              <div
                style={{
                  fontSize: "14px",
                  fontWeight: 500,
                }}
              >
                🌿 Don't rush this one.
              </div>

              <div
                style={{
                  marginTop: "5px",
                  fontSize: "12px",
                  color: "#827d77",
                }}
              >
                Progress still counts when it's quiet.
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
```
