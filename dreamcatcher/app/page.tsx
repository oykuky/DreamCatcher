'use client'
import { AnimatedBackground } from 'animated-backgrounds';
import DreamForm from './components/DreamForm';
export default function Home() {
  return (
    <div className="text-center">
      <AnimatedBackground animationName="cosmicDust" style={{ opacity: 0.5 }} />
      <DreamForm/>
    </div>
  );
}
