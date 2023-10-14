"use client"
import { Avatar, Button, Card, Col, Divider, Row } from "antd";
import {useState} from 'react'
import DModal from "@/components/ui/DModal";
import EditProfile from "./_edit/EditProfile";
const Profile = () => {
  const [open,setOpen]=useState(false)
  return (
    <Row gutter={30}>
      <Col sm={24} lg={6}>
        <Card>
          <Avatar
            className="mx-auto d-block"
            size={104}
            src={
              "https://st3.depositphotos.com/1037987/15097/i/450/depositphotos_150975580-stock-photo-portrait-of-businesswoman-in-office.jpg"
            }
          />
          <h5 className="text-center mb-0">Sirin Chopra</h5>
          <strong className="text-center text-secondary d-block">
            <small>User</small>
          </strong>
          <p className="mb-0">About</p>
          <Divider className="my-0" />
          <p>
            <small>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem
              quasi quos eos illum necessitatibus aut ab deleniti dolor
              consequatur praesentium. Reiciendis obcaecati corporis soluta quis
              accusamus inventore velit, illum vitae neque deserunt sapiente
              quia illo at temporibus dolor aut atque?
            </small>
          </p>
        </Card>
      </Col>
      <Col sm={24} lg={18}>
        <Card>
           <Row className="mb-4" justify={"space-between"}>
            <Col><h4>Profile Information</h4></Col>
            <Col><Button onClick={()=>setOpen(true)} type="primary">Edit</Button></Col>
           </Row>
          <h5 style={{ textDecoration: "underline" }} className="mb-0">
            Email
          </h5>
          {/* <Divider className="mt-0"/> */}
          <p>sirinchopra@gmail.com</p>

          <Divider className="mt-0" />
          <h5 style={{ textDecoration: "underline" }} className="mb-0">
            Contact Number
          </h5>
          <p>01306910346</p>

          <Divider className="mt-0" />
          <h5 style={{ textDecoration: "underline" }} className="mb-0">
            Present Address
          </h5>
          <p>Fokirapul, Motijhil , Dhaka</p>

          <Divider className="mt-0" />
          <h5 style={{ textDecoration: "underline" }} className="mb-0">
            Permanent Address
          </h5>
          <p>Jamalpur , Mymensing</p>
          <h5 style={{ textDecoration: "underline" }} className="mb-0">
            Bio Data
          </h5>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet harum libero eligendi temporibus perferendis unde nobis ad. Aperiam ab repellat molestiae eveniet, voluptates accusantium porro quidem ipsam voluptate sit ex sequi! Quas, ullam recusandae! Neque fugiat debitis unde modi, accusantium eius ab ea fuga architecto atque exercitationem iure distinctio magnam autem id qui porro accusamus quidem officia deleniti quo quibusdam voluptatem consectetur. Impedit vitae delectus adipisci dicta ex pariatur harum, non nesciunt cum nostrum nihil, nobis corporis eos sapiente voluptatum.</p>
        </Card>
      </Col>
        <DModal
        // setOk={handleSubmit}
        open={open}
        handleCancel={() => setOpen(false)}
        title="Edit Profile"
      >
        <EditProfile />
      </DModal>
    </Row>
  );
};

export default Profile;
