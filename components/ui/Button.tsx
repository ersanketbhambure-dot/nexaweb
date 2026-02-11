export default function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition shadow-lg">
      {children}
    </button>
  );
}
