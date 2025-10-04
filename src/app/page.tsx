import ToggleButton from '@/components/ToggleButton'

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">
          Designer vs Developer
        </h1>
        <ToggleButton />
      </div>
    </div>
  );
}
