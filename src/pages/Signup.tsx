import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Eye,
  EyeOff,
  Leaf,
  Lock,
  Mail,
  User,
} from "lucide-react";
import { useAuth } from "../context/AuthContext";

export default function Signup() {
  const navigate = useNavigate();
  const { signup } = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] =
    useState("");

  const [showPassword, setShowPassword] =
    useState(false);

  const [showConfirmPassword, setShowConfirmPassword] =
    useState(false);

  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] =
    useState(false);

  const passwordLength = password.length >= 8;
  const hasUppercase = /[A-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);

  const passwordsMatch =
    password.length > 0 &&
    password === confirmPassword;

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    setError("");

    const cleanName = name.trim();
    const cleanEmail = email.trim().toLowerCase();

    if (!cleanName) {
      setError("Please enter your name.");
      return;
    }

    if (!cleanEmail) {
      setError("Please enter your email address.");
      return;
    }

    if (!password) {
      setError("Please create a password.");
      return;
    }

    if (!passwordLength) {
      setError(
        "Your password must contain at least 8 characters.",
      );
      return;
    }

    if (!passwordsMatch) {
      setError("Your passwords do not match.");
      return;
    }

    try {
      setIsSubmitting(true);

      await signup(
        cleanName,
        cleanEmail,
        password,
      );

      navigate("/dashboard", {
        replace: true,
      });
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #faf7f2 0%, #f4efe7 55%, #edf2eb 100%)",
        color: "#27332f",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "32px 20px",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "1080px",
          display: "grid",
          gridTemplateColumns:
            "minmax(0, 0.9fr) minmax(360px, 0.8fr)",
          gap: "50px",
          alignItems: "center",
        }}
      >
        {/* LEFT SIDE */}

        <section
          style={{
            padding: "20px",
          }}
        >
          <button
            type="button"
            onClick={() => navigate("/")}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              border: "none",
              background: "transparent",
              color: "#718078",
              cursor: "pointer",
              fontSize: "14px",
              padding: 0,
              marginBottom: "55px",
            }}
          >
            <ArrowLeft size={16} />
            Back to Aurelia
          </button>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              marginBottom: "24px",
            }}
          >
            <div
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "14px",
                background: "#e3ede0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Leaf size={21} />
            </div>

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
                  marginTop: "3px",
                }}
              >
                Your gentle workspace
              </div>
            </div>
          </div>

          <h1
            style={{
              fontSize: "clamp(42px, 5vw, 70px)",
              lineHeight: 1,
              letterSpacing: "-0.055em",
              fontWeight: 500,
              margin: "0 0 24px",
              maxWidth: "580px",
            }}
          >
            Create a space
            <br />
            <span style={{ color: "#75847c" }}>
              that feels like yours.
            </span>
          </h1>

          <p
            style={{
              maxWidth: "520px",
              fontSize: "17px",
              lineHeight: 1.8,
              color: "#718078",
              margin: 0,
            }}
          >
            Start with a simple workspace designed
            around your priorities, your pace, and the
            things that matter to you.
          </p>

          <div
            style={{
              marginTop: "34px",
              display: "flex",
              flexDirection: "column",
              gap: "13px",
            }}
          >
            {[
              "Organize your day without the pressure",
              "Keep your notes and thoughts in one place",
              "See your progress without obsessing over it",
            ].map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "11px",
                  color: "#69776f",
                  fontSize: "14px",
                }}
              >
                <span
                  style={{
                    width: "23px",
                    height: "23px",
                    borderRadius: "50%",
                    background: "#e4eee1",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Check size={13} />
                </span>

                {item}
              </div>
            ))}
          </div>
        </section>

        {/* SIGNUP CARD */}

        <section
          style={{
            width: "100%",
            maxWidth: "470px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              background:
                "rgba(255,255,255,0.82)",
              border: "1px solid rgba(255,255,255,0.9)",
              borderRadius: "32px",
              padding: "38px",
              boxShadow:
                "0 30px 80px rgba(61,66,58,0.14)",
              backdropFilter: "blur(20px)",
            }}
          >
            <div
              style={{
                marginBottom: "28px",
              }}
            >
              <p
                style={{
                  margin: "0 0 8px",
                  fontSize: "12px",
                  letterSpacing: "0.08em",
                  color: "#8a958f",
                  textTransform: "uppercase",
                }}
              >
                Begin your journey
              </p>

              <h2
                style={{
                  margin: 0,
                  fontSize: "32px",
                  letterSpacing: "-0.04em",
                  fontWeight: 550,
                }}
              >
                Create your account
              </h2>

              <p
                style={{
                  margin:
                    "9px 0 0",
                  color: "#7b8781",
                  fontSize: "14px",
                  lineHeight: 1.6,
                }}
              >
                A few details and your Aurelia
                workspace is ready.
              </p>
            </div>

            <form
              onSubmit={handleSubmit}
              noValidate
            >
              {/* NAME */}

              <label
                style={{
                  display: "block",
                  marginBottom: "18px",
                }}
              >
                <span
                  style={{
                    display: "block",
                    fontSize: "13px",
                    fontWeight: 500,
                    marginBottom: "8px",
                  }}
                >
                  Your name
                </span>

                <div
                  style={{
                    position: "relative",
                  }}
                >
                  <User
                    size={17}
                    style={{
                      position: "absolute",
                      left: "15px",
                      top: "50%",
                      transform:
                        "translateY(-50%)",
                      color: "#9aa39e",
                    }}
                  />

                  <input
                    type="text"
                    value={name}
                    onChange={(event) =>
                      setName(event.target.value)
                    }
                    placeholder="What should we call you?"
                    autoComplete="name"
                    style={{
                      width: "100%",
                      boxSizing: "border-box",
                      padding:
                        "13px 15px 13px 44px",
                      borderRadius: "15px",
                      border:
                        "1px solid #dedbd3",
                      background: "#fbfaf7",
                      outline: "none",
                      color: "#27332f",
                      fontSize: "14px",
                    }}
                  />
                </div>
              </label>

              {/* EMAIL */}

              <label
                style={{
                  display: "block",
                  marginBottom: "18px",
                }}
              >
                <span
                  style={{
                    display: "block",
                    fontSize: "13px",
                    fontWeight: 500,
                    marginBottom: "8px",
                  }}
                >
                  Email address
                </span>

                <div
                  style={{
                    position: "relative",
                  }}
                >
                  <Mail
                    size={17}
                    style={{
                      position: "absolute",
                      left: "15px",
                      top: "50%",
                      transform:
                        "translateY(-50%)",
                      color: "#9aa39e",
                    }}
                  />

                  <input
                    type="email"
                    value={email}
                    onChange={(event) =>
                      setEmail(event.target.value)
                    }
                    placeholder="you@example.com"
                    autoComplete="email"
                    style={{
                      width: "100%",
                      boxSizing: "border-box",
                      padding:
                        "13px 15px 13px 44px",
                      borderRadius: "15px",
                      border:
                        "1px solid #dedbd3",
                      background: "#fbfaf7",
                      outline: "none",
                      color: "#27332f",
                      fontSize: "14px",
                    }}
                  />
                </div>
              </label>

              {/* PASSWORD */}

              <label
                style={{
                  display: "block",
                  marginBottom: "12px",
                }}
              >
                <span
                  style={{
                    display: "block",
                    fontSize: "13px",
                    fontWeight: 500,
                    marginBottom: "8px",
                  }}
                >
                  Password
                </span>

                <div
                  style={{
                    position: "relative",
                  }}
                >
                  <Lock
                    size={17}
                    style={{
                      position: "absolute",
                      left: "15px",
                      top: "50%",
                      transform:
                        "translateY(-50%)",
                      color: "#9aa39e",
                    }}
                  />

                  <input
                    type={
                      showPassword
                        ? "text"
                        : "password"
                    }
                    value={password}
                    onChange={(event) =>
                      setPassword(
                        event.target.value,
                      )
                    }
                    placeholder="Create a password"
                    autoComplete="new-password"
                    style={{
                      width: "100%",
                      boxSizing: "border-box",
                      padding:
                        "13px 46px 13px 44px",
                      borderRadius: "15px",
                      border:
                        "1px solid #dedbd3",
                      background: "#fbfaf7",
                      outline: "none",
                      color: "#27332f",
                      fontSize: "14px",
                    }}
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(
                        (current) => !current,
                      )
                    }
                    aria-label={
                      showPassword
                        ? "Hide password"
                        : "Show password"
                    }
                    style={{
                      position: "absolute",
                      right: "13px",
                      top: "50%",
                      transform:
                        "translateY(-50%)",
                      border: "none",
                      background:
                        "transparent",
                      color: "#8a958f",
                      cursor: "pointer",
                      padding: "5px",
                    }}
                  >
                    {showPassword ? (
                      <EyeOff size={17} />
                    ) : (
                      <Eye size={17} />
                    )}
                  </button>
                </div>
              </label>

              {/* PASSWORD REQUIREMENTS */}

              <div
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    "1fr 1fr",
                  gap: "7px 10px",
                  marginBottom: "18px",
                  fontSize: "11px",
                  color: "#87938c",
                }}
              >
                <span
                  style={{
                    color: passwordLength
                      ? "#5e7566"
                      : "#9aa39e",
                  }}
                >
                  {passwordLength
                    ? "✓"
                    : "○"}{" "}
                  8+ characters
                </span>

                <span
                  style={{
                    color: hasUppercase
                      ? "#5e7566"
                      : "#9aa39e",
                  }}
                >
                  {hasUppercase
                    ? "✓"
                    : "○"}{" "}
                  Uppercase letter
                </span>

                <span
                  style={{
                    color: hasNumber
                      ? "#5e7566"
                      : "#9aa39e",
                  }}
                >
                  {hasNumber ? "✓" : "○"}{" "}
                  Number
                </span>

                <span
                  style={{
                    color: passwordsMatch
                      ? "#5e7566"
                      : "#9aa39e",
                  }}
                >
                  {passwordsMatch
                    ? "✓"
                    : "○"}{" "}
                  Passwords match
                </span>
              </div>

              {/* CONFIRM PASSWORD */}

              <label
                style={{
                  display: "block",
                  marginBottom: "20px",
                }}
              >
                <span
                  style={{
                    display: "block",
                    fontSize: "13px",
                    fontWeight: 500,
                    marginBottom: "8px",
                  }}
                >
                  Confirm password
                </span>

                <div
                  style={{
                    position: "relative",
                  }}
                >
                  <Lock
                    size={17}
                    style={{
                      position: "absolute",
                      left: "15px",
                      top: "50%",
                      transform:
                        "translateY(-50%)",
                      color: "#9aa39e",
                    }}
                  />

                  <input
                    type={
                      showConfirmPassword
                        ? "text"
                        : "password"
                    }
                    value={confirmPassword}
                    onChange={(event) =>
                      setConfirmPassword(
                        event.target.value,
                      )
                    }
                    placeholder="Enter your password again"
                    autoComplete="new-password"
                    style={{
                      width: "100%",
                      boxSizing: "border-box",
                      padding:
                        "13px 46px 13px 44px",
                      borderRadius: "15px",
                      border:
                        "1px solid #dedbd3",
                      background: "#fbfaf7",
                      outline: "none",
                      color: "#27332f",
                      fontSize: "14px",
                    }}
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowConfirmPassword(
                        (current) => !current,
                      )
                    }
                    aria-label={
                      showConfirmPassword
                        ? "Hide password"
                        : "Show password"
                    }
                    style={{
                      position: "absolute",
                      right: "13px",
                      top: "50%",
                      transform:
                        "translateY(-50%)",
                      border: "none",
                      background:
                        "transparent",
                      color: "#8a958f",
                      cursor: "pointer",
                      padding: "5px",
                    }}
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={17} />
                    ) : (
                      <Eye size={17} />
                    )}
                  </button>
                </div>
              </label>

              {/* ERROR */}

              {error && (
                <div
                  role="alert"
                  style={{
                    marginBottom: "16px",
                    padding: "12px 14px",
                    borderRadius: "13px",
                    background: "#f7e9e5",
                    color: "#9a5d52",
                    fontSize: "13px",
                    lineHeight: 1.5,
                  }}
                >
                  {error}
                </div>
              )}

              {/* SUBMIT */}

              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "9px",
                  padding: "14px 20px",
                  border: "none",
                  borderRadius: "16px",
                  background:
                    isSubmitting
                      ? "#66736d"
                      : "#27332f",
                  color: "#ffffff",
                  cursor: isSubmitting
                    ? "wait"
                    : "pointer",
                  fontSize: "14px",
                  fontWeight: 500,
                  boxShadow:
                    "0 12px 25px rgba(39,51,47,.15)",
                }}
              >
                {isSubmitting
                  ? "Creating your space..."
                  : "Create my Aurelia space"}

                {!isSubmitting && (
                  <ArrowRight size={16} />
                )}
              </button>
            </form>

            {/* LOGIN */}

            <div
              style={{
                textAlign: "center",
                marginTop: "22px",
                paddingTop: "20px",
                borderTop:
                  "1px solid #ece9e2",
                fontSize: "13px",
                color: "#7b8781",
              }}
            >
              Already have an account?{" "}
              <Link
                to="/login"
                style={{
                  color: "#4f6659",
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                Log in
              </Link>
            </div>
          </div>

          <p
            style={{
              textAlign: "center",
              marginTop: "16px",
              color: "#9aa39e",
              fontSize: "11px",
              lineHeight: 1.5,
            }}
          >
            Your account is stored locally in this
            prototype.
          </p>
        </section>
      </div>
    </main>
  );
}