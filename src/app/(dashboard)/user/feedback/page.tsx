"use client";
import DForm from "@/components/forms/DForm";
import DFormInput from "@/components/forms/DFormInput";
import DFormTextArea from "@/components/forms/DFormTextArea";
import DBreadCrumb from "@/components/ui/DBreadCrumb";
import { useCreateFeedbackMutation } from "@/redux/api/feedbackApi";
import { feedbackSchema } from "@/schema/schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { Avatar, Button, Col, Input, Row, message } from "antd";

const FeedbackForm = () => {
  const [createFeedback] = useCreateFeedbackMutation();
  const formSubmit = async (values: any) => {
    message.loading("Creating...");
    try {
      const res = await createFeedback(values).unwrap();
        if (res?.success) {
          message.success(res.message);
        }
    } catch (err: any) {
      console.error(err.message);
    }
  };

  return (
    <div>
      <DBreadCrumb
        items={[
          {
            label: "Feedback",
            link: "/user/feedback",
          },
        ]}
      />
      <DForm submitHandler={formSubmit} resolver={yupResolver(feedbackSchema)}>
        <Row justify={"center"} align={"middle"}>
          <Col
            style={{
              background: "white",
              padding: "100px 30px",
            }}
            sm={20}
            lg={10}
          >
            <h3 className="text-center">Drop Your Feedbacks</h3>
            <div className="mb-3">
              <DFormInput size="large" placeholder="Subject" name="subject" />
            </div>
            <div className="mb-3">
              <DFormTextArea rows={6} placeholder="Message" name="message" />
            </div>
            <div>
              <Button className="w-100" type="primary" htmlType="submit">
                Submit
              </Button>
            </div>
          </Col>
        </Row>
      </DForm>
    </div>
  );
};

export default FeedbackForm;
