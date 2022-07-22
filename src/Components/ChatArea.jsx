import React, { useState } from 'react'

const ChatArea = () => {
    const [userChat, setuserChat] = useState({
        friendName: "Madison jones",
        chat: [
            {
                isOwner: true,
                userImage: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%281%29.png",
                time: "1.22pm",
                messages: [
                    "Sit amet risus nullam eget felis eget. Dolor sed viverra ipsum😂😂😂",
                    "Cras mollis nec arcu malesuada tincidunt."
                ]
            },
            {
                isOwner: false,
                userImage: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/3364143/download+%282%29.png",
                time: "2.45pm",
                messages: [
                    "Aenean tristique maximus tortor non tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae😊",
                    "Ut faucibus pulvinar elementum integer enim neque volutpat."
                ]
            },

        ]
    })

    return (
        <div className="chat-area">
            <div className="chat-area-header">
                <div className="chat-area-title">{userChat.friendName}</div>
            </div>
            <div className="chat-area-main">
                {userChat.chat.map((item, index) => {
                    const { isOwner, userImage, time, messages } = item
                    return (
                        <div className={`chat-msg ${isOwner ? "owner" : ""}`} key={index}>
                            <div className="chat-msg-profile">
                                <img className="chat-msg-img" src={userImage} alt />
                                <div className="chat-msg-date">Message seen {time}</div>
                            </div>
                            <div className="chat-msg-content">
                                {
                                    messages.map((msg, ind) => {
                                        return (
                                            <div className="chat-msg-text" key={ind}>{msg}</div>
                                        )
                                    })
                                }
                            </div>
                        </div>)
                })
                }
            </div>
            <div className="chat-area-footer">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-video">
                    <path d="M23 7l-7 5 7 5V7z" />
                    <rect x={1} y={5} width={15} height={14} rx={2} ry={2} /></svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-image">
                    <rect x={3} y={3} width={18} height={18} rx={2} ry={2} />
                    <circle cx="8.5" cy="8.5" r="1.5" />
                    <path d="M21 15l-5-5L5 21" /></svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-plus-circle">
                    <circle cx={12} cy={12} r={10} />
                    <path d="M12 8v8M8 12h8" /></svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-paperclip">
                    <path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48" /></svg>
                <input type="text" placeholder="Type something here..." />
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-smile">
                    <circle cx={12} cy={12} r={10} />
                    <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01" /></svg>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-thumbs-up">
                    <path d="M14 9V5a3 3 0 00-3-3l-4 9v11h11.28a2 2 0 002-1.7l1.38-9a2 2 0 00-2-2.3zM7 22H4a2 2 0 01-2-2v-7a2 2 0 012-2h3" /></svg>
            </div>
        </div>
    )
}

export default ChatArea