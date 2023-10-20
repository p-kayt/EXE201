import React from "react";
import "./registerTutor.scss";
import { Call, InfoCircle, Location, Sms, SmsSolid } from "../../assets/Icons";
import { useNavigate } from "react-router-dom";
import Dropdown from "../../components/dropdown/Dropdown";
import CustomButton from "../../components/button/CustomButton";
import { useDispatch } from "react-redux";
import { setMessage } from "../../store/features/message.Slice";


type TooltipProps = { value: string };

const RegisterTutor = () => {
  const expression: RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  const phoneExpression: RegExp = /^(09|03|07|08|05)\d{8}$/;

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  // const [message, setMessage] = React.useState("");
  const [nameValidate, setNameValidate] = React.useState("");
  const [emailValidate, setEmailValidate] = React.useState("");
  const [phoneValidate, setPhoneValidate] = React.useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const EducationalLevel = ["Sinh viên", "Cử nhân", "Thạc sĩ", "Tiến sĩ"];

  const TooltipIcon = (props: TooltipProps) => {
    const { value } = props;
    const [hover, setHover] = React.useState(false);
    const handleMouseIn = () => {
      setHover(true);
    };
    const handleMouseOut = () => {
      setHover(false);
    };

    return (
      <>
        <div
          className="tooltip"
          onMouseOver={handleMouseIn}
          onMouseOut={handleMouseOut}
        >
          <img src={InfoCircle} />
          {hover ? <span className="tooltip-text">{value}</span> : ""}
        </div>
      </>
    );
  };

  const handleSubmit = () => {
    if (!name.length) {
      setNameValidate("Nhập tên của bạn!");
      return;
    }
    setNameValidate("");
  
    if (!phone.length) {
      setPhoneValidate("Nhập số điện thoại!");
      return;
    }
    setPhoneValidate("");
  
    if (!email.length) {
      setEmailValidate("Nhập Email đăng ký!");
      return;
    }
    setEmailValidate("");
  
    dispatch(setMessage("Cảm ơn vì đã đăng ký ! Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất "));
    navigate("/");
  };
  

  const handleName = (e: any) => {
    setName(e.target.value);
  };

  const handlePhone = (e: any) => {
    setPhoneValidate("");
    if (phoneExpression.test(e.target.value) && e.target.value.length >= 10) {
      setPhone(e.target.value);
    } else {
      setPhoneValidate("Số điện thoại không hợp lệ!");
    }
  };

  const handleEmail = (e: any) => {
    // reset
    setEmailValidate("");
    //
    if (e.target.value.length > 0) {
      if (expression.test(e.target.value)) {
        setEmail(e.target.value);
      } else {
        setEmailValidate("Email không hợp lệ!");
      }
    } else {
      setEmailValidate("Nhập email đăng nhập!");
    }
  };

  const handleMessage = (e: any) => {
    setMessage(e.target.value);
  };

  return (
    <>
      <div className="register-tutor-content">
        <div className="register-tutor-content-left">
          <div className="title">
            Hãy trở thành viên của <span>Zuni Tutor</span>
          </div>

          <div className="description">
            Bạn muốn trở thành gia sư?
            <br />
            Hãy để chúng tôi tư vấn cho bạn ngay hôm nay
          </div>

          <div className="contact">
            <div className="contact-information">
              <img src={SmsSolid} />
              <p>
                <span>Email</span>
                <br />
                hello@zunitutor.tech
              </p>
            </div>

            <div className="contact-information">
              <img src={SmsSolid} />
              <p>
                <span>Số điện thoại</span>
                <br />
                0372592592
              </p>
            </div>

            <div className="contact-information">
              <img src={Location} />
              <p>
                <span>Địa chỉ</span>
                <br />
                FPT university - Hồ Chí Minh
              </p>
            </div>
          </div>
        </div>

        <div className="register-tutor-content-right">
          <div className="title">Đăng ký nhận thông tin</div>

          <div className="form">
            <div>
              <div className="validate">
                <label>Họ và tên</label>
                {nameValidate === "" ? (
                  ""
                ) : (
                  <TooltipIcon value={nameValidate} />
                )}
              </div>

              <input
                type="text"
                placeholder="Nhập họ và tên"
                onChange={(e) => handleName(e)}
              />
            </div>

            <div>
              <div className="validate">
                <label>Số điện thoại</label>
                {phoneValidate === "" ? (
                  ""
                ) : (
                  <TooltipIcon value={phoneValidate} />
                )}
              </div>

              <input
                type="text"
                placeholder="Nhập số điện thoại"
                onChange={(e) => handlePhone(e)}
              />
            </div>

            <div>
              <div className="validate">
                <label>Email</label>
                {emailValidate === "" ? (
                  ""
                ) : (
                  <TooltipIcon value={emailValidate} />
                )}
              </div>

              <input
                type="email"
                placeholder="Nhập Email"
                onChange={(e) => handleEmail(e)}
              />
            </div>

            <div>
              <label>Trình độ hiện tại</label>
              <Dropdown
                dropdownText="Chọn trình độ hiện tại"
                valueList={EducationalLevel}
                style={{ width: "90%", marginTop: "4px" }}
              />
            </div>

            <div className="text-area">
              <label>Tin nhắn</label>
              <textarea rows={5} cols={33} placeholder="Nhập nội dung bạn muốn gửi"/>
              
            </div>
          </div>

          <CustomButton
            theme="light"
            btnText="Gửi thông tin"
            color={"#fff"}
            btnColor={"#6B48F2"}
            onClick={() => handleSubmit()}
          />
        </div>
      </div>
    </>
  );
};

export default RegisterTutor;
