import React from 'react';

export const PersonalCard = () => (
  <div className='max-w-sm rounded overflow-hidden shadow-lg'>
    <img
      className='w-full'
      src={require('../assets/imgs/avatar.png')}
      alt='Display'
    />
    <div className='px-6 py-4'>
      <div className='font-bold text-blue-500 text-xl mb-2'>Evan Tian</div>
      <p className='text-gray-700 text-base'>
        When i’m not coding i switch to netflix with biscuits and cold tea as my
        companion. <span></span>😜
      </p>
    </div>
    <div className='px-6 py-4'>
      <span className='personal-tag'>#Software Engineer</span>
      <span className='personal-tag'>#Writter</span>
      <span className='personal-tag'>#Cat Fancier</span>
    </div>
  </div>
);
