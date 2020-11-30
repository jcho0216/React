import React, { useState, useEffect } from 'react';

const Info = () => {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');
    useEffect(()=> {
        console.log('렌더링이 완료되었습니다.');
        console.log({
            name,
            nickname
        });
    });

    const onChangeName = e => {
        setName(e.target.value);
    };

    const onChangeNickname = e => {
        setNickname(e.target.value);
    };

    const inputStyle = {
        padding: 10,
        margin: 5,
    };

    return(
        <div>
            <div>
                <input style={inputStyle} value={name} onChange={onChangeName} />
                <input style={inputStyle} value={nickname} onChange={onChangeNickname}/>
            </div>

            <div>
                <b>이름: </b>{name}
            </div>

            <div>
                <b>닉네임: </b>{nickname}
            </div>
        </div>
    );
};

export default Info;