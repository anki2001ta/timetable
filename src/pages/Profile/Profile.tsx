import React from 'react';
import './Profile.scss';
import { Typography } from 'antd';
import design from '../../assets/teacher_design.svg';
import dps from '../../assets/dps_logo.svg';

const { Paragraph, Text } = Typography;

type Props = {}

const Profile = (props: Props) => {
  return (
    <div className='teacher_profile'>
      <Paragraph className='teacher_heading'>Teacher's Profile</Paragraph>
      <div className='teacher_container'>
        <div className='head'>
          <img src={design} className='design' alt="design" />
        </div>
        <div className='teacher_profile_pic'>
          <img src={'https://media.licdn.com/dms/image/C4D03AQEmUz6tnKupMQ/profile-displayphoto-shrink_400_400/0/1659390322427?e=1686787200&v=beta&t=BZoO2iDPEGARSo9AA4hInf162_orkOO8NjjIy5k4Chc'} />
        </div>
        <div className='watermark'>
          <img src={dps} alt='Watermark' />
        </div>
        <div className='name'>
          <Text>Kavita Singh</Text>
        </div>
        <div className='teacher_deatils'>
        <Text>Class Teacher - 7thD</Text>
        <Text>Attendence - 84/100</Text>
        <Text>DOB - 08/09/1986</Text>
        </div>
        <div className='teacher_allotment'>
        <Text className='allotment_heading'>Classess Alloted</Text>
        <div className='teacher_subjects'>
        <div className='teacher_subject'>
        <Text>Class 7D - Maths, GK</Text>
        <Text>Class 6B - Maths</Text>
        </div>
        <div className='teacher_subject'>
        <Text>Class 5A - Social Studies</Text>
        
        
        <Text>Class 6C - Science</Text>
        </div>
        <div className='teacher_subject'>
        <Text>Class 4C - Moral Science</Text>
        </div>
        </div>
        </div>
        <div className='audit'>
          <Text>Audit</Text>
          <Text className='comment'>New Comments</Text>

      </div>
      </div>
    </div>
  );
};

export default Profile;
