import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { userSelector } from "../../store/selector";
import { BlankAva } from "../../assets/Images";
import CustomButton from "../../components/button/CustomButton";
import { Camera, InfoCircle } from "../../assets/Icons";
import { FormProvider, useForm } from "react-hook-form";
import { ThunkDispatch } from "@reduxjs/toolkit";
import * as joi from "joi";
import { getUser, updateUser } from "../../store/api-thunk/userThunk";
import { joiResolver } from "@hookform/resolvers/joi";
import { useMutation, useQuery } from "@tanstack/react-query";
import { instance } from "../../api/api";
import FormError from "../../components/form/FormError";
import { toast } from "react-toastify";
import moment from "moment";

export interface IUpdateUser {
  phoneNumber: string;
  email: string;
  fullName: string;
  dateOfBirth: string;
  password: string;
  image: string;
}

const defaultValues: IUpdateUser = {
  phoneNumber: "",
  email: "",
  fullName: "",
  dateOfBirth: new Date().toISOString().slice(0, 10),
  password: "",
  image: "",
};

const schema = joi.object<IUpdateUser>({
  phoneNumber: joi.string().required(),
  email: joi
    .string()
    .email({ tlds: { allow: false } })
    .required(),
  fullName: joi.string().required(),
  dateOfBirth: joi.date().required(),
  password: joi.string().allow("").required(),
  image: joi.string().allow(""),
});

type Props = {};

const UserInfo = (props: Props) => {
  const formMethods = useForm<IUpdateUser>({
    defaultValues,
    resolver: joiResolver(schema),
  });

  const dispatch = useDispatch<ThunkDispatch<any, any, any>>();
  let { ID } = useParams();
  const userState = useSelector(userSelector);
  const user = userState.data;
  const [image, setImage] = React.useState("");

  const userProfile = useQuery({
    queryKey: ["user", ID],
    queryFn: async () => {
      const res = await instance.get(`/api/User/Info?id=${ID}`);

      return res.data.result;
    },
    enabled: !!ID,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  useEffect(() => {
    if (userProfile.data) {
      formMethods.setValue("image", image);
    }
  }, [image]);

  useEffect(() => {
    if (userProfile.data) {
      formMethods.setValue("phoneNumber", userProfile.data?.phoneNumber);
      formMethods.setValue("email", userProfile.data?.email);
      formMethods.setValue("fullName", userProfile.data?.fullName);

      formMethods.setValue(
        "dateOfBirth",
        moment(userProfile.data?.dateOfBirth).format("YYYY-MM-DD")
      );
      formMethods.setValue("image", userProfile.data?.image);
      setImage(userProfile.data?.image);
    }
  }, [userProfile.data]);

  const handleUpdateUserMutation = useMutation({
    mutationFn: async (data: IUpdateUser) => {
      const res = await instance.put(`/api/User/Update?id=${ID}`, {
        ...data,

        image: image,
      });
      return res.data.result;
    },
    onSuccess: () => {
      toast.success("Cập nhật thông tin thành công");
      dispatch(getUser({ ID }));
    },
    onError: () => {
      toast.error("Cập nhật thông tin thất bại");
    },
  });

  const handleUpdate = () => {
    // dispatch(updateUser({ ID, data: newUser }));
    // dispatch(getUser({ ID }));
  };

  const v1UploadFile = async (file: File) => {
    const url = "https://api.monoinfinity.net/api/v1/upload-file/upload";
    const formData = new FormData();
    formData.append("file", file);
    const res = await instance.post(url, formData, {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjQwNzdkN2ZlLTI4MGUtZWRiYi1kYzVkLWJjNTY0ZmQ1ZTQ2YyIsInR5cGUiOiJBVVRIIiwiZXhwaXJlZEF0IjoxNzAxOTAxNDk3NzA2LCJpYXQiOjE2OTkzMDk0OTd9.KUI2QvbC2mKcOC8Up5iOJQ3Pqs4p_BDS0CEx-RihA1A",
        "Content-Type": "multipart/form-data",
      },
    });
    return res.data.fileLocation;
  };

  return (
    <FormProvider {...formMethods}>
      <form
        className="content-container"
        onSubmit={formMethods.handleSubmit((data) => {
          handleUpdateUserMutation.mutate(data);
        })}
      >
        <h1>Thông tin cá nhân</h1>
        <div className="avatar-container">
          <img
            className="profile-pic"
            src={image !== "" ? image : user?.image ? user?.image : BlankAva}
          />
          <div className="upload-btn">
            <input
              type="file"
              id="upload-hidden"
              accept="image/*"
              style={{ display: "none" }}
              onChange={(e) => {
                if (e.target.files && e.target.files[0]) {
                  const file = e.target.files[0];
                  v1UploadFile(file).then((res) => {
                    setImage(res);
                  });
                }
              }}
            />
            <label htmlFor="upload-hidden">
              <CustomButton
                theme="stripe"
                iconSrc={Camera}
                btnText="Thay đổi ảnh đại diện"
              />
            </label>
          </div>
        </div>
        <div className="info-item">
          <label htmlFor="fullname">Họ và tên</label>
          <div className="input">
            <input
              type="text"
              placeholder="Họ và tên"
              id="fullname"
              {...formMethods.register("fullName")}
            />
          </div>
          <FormError name="fullName" />
        </div>
        <div className="info-item">
          <label htmlFor="dob">Ngày sinh</label>
          <div className="input">
            <input
              type="date"
              id="dob"
              {...formMethods.register("dateOfBirth")}
            />
          </div>
          <FormError name="dateOfBirth" />
        </div>
        <div className="info-item">
          <label htmlFor="email">Email</label>
          <div className="input">
            <input
              type="text"
              placeholder="Email"
              id="email"
              {...formMethods.register("email")}
            />
          </div>
          <FormError name="email" />
        </div>
        <div className="info-item">
          <label htmlFor="phone">Số điện thoại</label>
          <div className="input">
            <input
              type="text"
              placeholder="Số điện thoại"
              {...formMethods.register("phoneNumber")}
            />
          </div>
          <FormError name="phoneNumber" />
        </div>
        <div className="info-item">
          <label htmlFor="fullname">Mật khẩu</label>
          <div className="input">
            <input
              type="text"
              placeholder=""
              id="fullname"
              {...formMethods.register("password")}
            />
          </div>
          <FormError name="password" />
        </div>
        <button
          style={{
            border: "none",
          }}
        >
          <div className="update-btn">
            <CustomButton
              style={{ fontWeight: 600 }}
              theme="stripe"
              btnText="Cập nhật thông tin"
              btnColor={"#000"}
              color={"white"}
              onClick={() => handleUpdate()}
            />
          </div>
        </button>
      </form>
    </FormProvider>
  );
};

export default UserInfo;
