'use client'
import { AnimatedBackground } from 'animated-backgrounds';
import DreamForm from './components/DreamForm';
export default function Home() {
  return (
    <div className="flex text-center justify-center items-center">
      <AnimatedBackground animationName="starryNight" style={{ opacity: 0.5 }} />
      <DreamForm/>
    </div>
  );
}
