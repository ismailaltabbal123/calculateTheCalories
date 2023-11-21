import './App.css';
import React, { useState } from 'react';
import Ismail from './image/ismail-altabbal.jpg'
import video from './image/cloud.mp4'

function CalorieCalculator() {
  const [bolian, setBolian] = useState(false);
  const [HeadingText, setHeadingText] = useState(0);
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [activityLevel, setActivityLevel] = useState('sedentary');

  const calculateCalories = () => {
    let bmr = 0;
    if (gender === 'male') {
      bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else if (gender === 'female') {
      bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }

    const activityMultipliers = {
      sedentary: 1.2,
      lightlyActive: 1.375,
      moderatelyActive: 1.55,
      veryActive: 1.725,
      superActive: 1.9
    };

    const dailyCalories = bmr * activityMultipliers[activityLevel];
    return dailyCalories.toFixed(2);
  };

  const handleClick = () => {
    if (weight.trim() === '' ||  height.trim()=== '' || age.trim() === '') {
      alert('يرجى التأكد من ادخال جميع البيانات'); 
    } else {
    setBolian(true)
    setHeadingText(calculateCalories);
  }};



  return (<>
    <video className='video-v' autoPlay loop muted>
      <source src={video}/>
    </video>
    <div className='main-div p-5 md:p-10 w-96 flex flex-col gap-5 rounded-xl py-8 md:py-14' dir="rtl">
      <div className='bg-white p-2 rounded-md flex flex-row gap-2 items-center justify-center mb-2'>
        <h1 className='font-extrabold text-md'>تطوير:</h1>
        <img src={Ismail} className='w-14 rounded-full' alt='me'/>
        <div>
          <h1 className='font-extrabold text-md'>إسماعيل الطبال</h1>
          <h1 className='font-extrabold text-sm text-bluec'>Front-end web developer</h1>
        </div>
      </div>
      <h1 className='font-extrabold text-lg text-center text-white'>تحديد السعرات الحرارية التي يحتاجها جسم الإنسان بشكل يومي</h1>
      <form className='flex flex-col gap-2'>
        <div className='flex flex-row gap-2 items-center'>
          <label className='font-semibold w-full color-b-t'>الوزن (بالكيلوغرام):</label>
          <input className='p-2 rounded-md h-8 w-full text12' type="number" placeholder='0' value={weight} onChange={(e) => setWeight(e.target.value)} />
        </div>
        <div className='flex flex-row gap-2 items-center'>
          <label className='font-semibold w-full color-b-t'>الطول (بالسنتيمتر):</label>
          <input className='p-2 rounded-md h-8 w-full text12' type="number" placeholder='0' value={height} onChange={(e) => setHeight(e.target.value)}  />
        </div>
        <div className='flex flex-row gap-2 items-center'>
          <div className='flex flex-row gap-2 items-center'>
          <label className='font-semibold color-b-t'>الجنس:</label>
          <select value={gender} className='px-2 rounded-md h-8 text12' onChange={(e) => setGender(e.target.value)}>
            <option value="male">ذكر</option>
            <option value="female">أنثى</option>
          </select>
        </div>
          <div className='flex flex-row gap-2 items-center'>
            <label className='font-semibold color-b-t'>العمر:</label>
            <input className='p-2 rounded-md h-8 w-full text12' type="number" placeholder='0' value={age} onChange={(e) => setAge(e.target.value)} />
          </div>
        </div>
        <div className='flex flex-row gap-2 items-center'>
          <h1 className='font-semibold w-full color-b-t'>مستوى النشاط البدني:</h1>
          <select className='px-2 rounded-md h-8 text12' value={activityLevel} onChange={(e) => setActivityLevel(e.target.value)}>
            <option value="sedentary">قليل النشاط</option>
            <option value="lightlyActive">نشاط خفيف</option>
            <option value="moderatelyActive">نشاط معتدل</option>
            <option value="veryActive">نشاط مرتفع</option>
            <option value="superActive">شديد النشاط</option>
          </select>
        </div>
      </form>
        <button className='bg-white text-black font-semibold p-2 rounded-md' onClick={handleClick}>حساب السعرات الحرارية</button>
        <h1 className={`font-extrabold text-sm text-center text-white numberr ${bolian ? "block" : "hidden"}`}>انت تحتاج تناول اغذية تحتوي على {HeadingText} سعرة حرارية يومياً للحفاظ على وزنك</h1>
    </div>
  </>
  );
}

export default CalorieCalculator;
