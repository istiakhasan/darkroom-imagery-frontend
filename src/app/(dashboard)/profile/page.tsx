"use client"
import { Avatar, Button, Card, Col, Divider, Row } from "antd";
import {useState} from 'react'
import DModal from "@/components/ui/DModal";
import EditProfile from "./_edit/EditProfile";
import { useGetProfileQuery } from "@/redux/api/authApi";
import Loading from "@/app/loading";
const Profile = () => {
  const {data,isLoading}=useGetProfileQuery(undefined,{
    refetchOnMountOrArgChange:true,
    refetchOnReconnect:true
  })
  const profileInfo=data?.data
  const [openProfileEditModal,setOpenProfileEditModal]=useState(false)

  if(isLoading){
    return <Loading />
  }
  return (
    <Row gutter={30}>
      <Col sm={24} lg={6}>
        <Card>
          <Avatar
            className="mx-auto d-block"
            size={104}
            src={
              profileInfo?.profileImg
            }
          />
          <h5 className="text-center mb-0">{profileInfo?.name}</h5>
          <strong className="text-center text-secondary d-block">
            <small>{profileInfo?.role}</small>
          </strong>
          <p className="mb-0">About</p>
          <Divider className="my-0" />
          <p>
            <small>
            {profileInfo?.about}
            </small>
          </p>
        </Card>
      </Col>
      <Col sm={24} lg={18}>
        <Card>
           <Row className="mb-4" justify={"space-between"}>
            <Col><h4>Profile Information</h4></Col>
            <Col><Button onClick={()=>setOpenProfileEditModal(true)} type="primary">Edit</Button></Col>
           </Row>
          <h5 style={{ textDecoration: "underline" }} className="mb-0">
            Email
          </h5>
          {/* <Divider className="mt-0"/> */}
          <p>{profileInfo?.email}</p>

          <Divider className="mt-0" />
          <h5 style={{ textDecoration: "underline" }} className="mb-0">
            Contact Number
          </h5>
          <p>{profileInfo?.contactNo}</p>

          <Divider className="mt-0" />
          <h5 style={{ textDecoration: "underline" }} className="mb-0">
            Present Address
          </h5>
          <p>{profileInfo?.presentAddress}</p>

          <Divider className="mt-0" />
          <h5 style={{ textDecoration: "underline" }} className="mb-0">
            Permanent Address
          </h5>
          <p>{profileInfo?.permanentAddress}</p>
          <h5 style={{ textDecoration: "underline" }} className="mb-0">
            Bio Data
          </h5>
          <p>{profileInfo?.bioData}</p>
        </Card>
      </Col>
        <DModal
        // setOk={handleSubmit}
        width="700px"
        open={openProfileEditModal}
        handleCancel={() => setOpenProfileEditModal(false)}
        title="Edit Profile"
      >
        <EditProfile setOpenProfileEditModal={setOpenProfileEditModal} profileInfo={profileInfo} />
      </DModal>
    </Row>
  );
};

export default Profile;
