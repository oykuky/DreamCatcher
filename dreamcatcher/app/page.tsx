'use client'
import { AnimatedBackground } from 'animated-backgrounds';
import DreamForm from './components/DreamForm';
import Header from './components/Header';
export default function Home() {
  return (
    <div className="flex flex-col text-center justify-center items-center">
      <Header/>
      <AnimatedBackground animationName="starryNight" style={{ opacity: 0.5 }} />
      <DreamForm/>
    </div>
  );
}
