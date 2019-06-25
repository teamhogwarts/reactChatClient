import React from 'react';
import {Table} from "reactstrap";
import Toast from "reactstrap/es/Toast";
import ToastHeader from "reactstrap/es/ToastHeader";
import ToastBody from "reactstrap/es/ToastBody";

export const ChatTable = ({cols = [
                                        {"num": 0, "name" : "default"},
                                        {"num": 1, "name" : "default"},
                                        {"num": 2, "name" : "default"}
                                ],
                              messages = [
                                  {"sender": "Peter", "message": "Hey, alles klar?", "time": new Date().toLocaleTimeString()},
                                  {"sender": "Marc", "message": "Hey, jo be dir?", "time": new Date().toLocaleTimeString()}
                              ],

                          }) =>

    <div>
        <div className="p-3 my-2 rounded">
            {messages.map((msg, i) =>
                <Toast key={i}>
                    <ToastHeader>
                        <div>
                            <p>{msg.sender}</p>
                            <p>{msg.time}</p>
                        </div>
                    </ToastHeader>
                    <ToastBody>
                        <p>{msg.message}</p>
                    </ToastBody>
                </Toast>
            )}

        </div>
    </div>
    {/*<Table borderless>*/}
    {/*    <thead>*/}
    {/*        <tr>*/}
    {/*            {cols.map((col) => <th key={col.num}>{col.name}</th>)}*/}
    {/*        </tr>*/}
    {/*    </thead>*/}
    {/*    <tbody>*/}
    {/*    {*/}
    {/*        messages.map((msg, i) =>*/}
    {/*            <tr key={i}>*/}
    {/*                <td>{msg.sender}</td>*/}
    {/*                <td>{msg.message}</td>*/}
    {/*                <td>{msg.time}</td>*/}
    {/*            </tr>)*/}
    {/*    }*/}
    {/*    </tbody>*/}
    {/*</Table>;*/}
