'use client';
import { useEffect, useState } from 'react';

export default function TeachersPage() {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/teachers')
      .then(res => res.json())
      .then(data => {
        setTeachers(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Teachers</h1>
      <div className="grid gap-4">
        {teachers.map(teacher => (
          <div key={teacher.id} className="border p-4 rounded shadow">
            <p><strong>Name:</strong> {teacher.name}</p>
            <p><strong>Subject:</strong> {teacher.subject}</p>
            <p><strong>Email:</strong> {teacher.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
