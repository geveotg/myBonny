"use client";
import React from "react";
import type { CountdownProps } from "antd";
import { Col, Row, Statistic } from "antd";

const { Countdown } = Statistic;

const deadline = Date.now() + 1000 * 60 * 60 * 24 * 2 + 1000 * 30; // Dayjs is also OK

const onFinish: CountdownProps["onFinish"] = () => {
    console.log("finished!");
};

const onChange: CountdownProps["onChange"] = (val) => {
    if (typeof val === "number" && 4.95 * 1000 < val && val < 5 * 1000) {
        console.log("changed!");
    }
};

const Static: React.FC = () => (
    <div style={{ width: 260 }}>
        <Row gutter={16}>
            <Col span={12}>
                <Countdown
                    title="Countdown"
                    value={deadline}
                    onFinish={onFinish}
                />
            </Col>
            <Col span={12}>
                <Countdown
                    title="Million Seconds"
                    value={deadline}
                    format="HH:mm:ss:SSS"
                />
            </Col>
        </Row>
    </div>
);

export default Static;
