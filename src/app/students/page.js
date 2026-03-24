'use client';
import { useEffect, useState } from 'react';

export default function StudentsPage() {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/students')
      .then(res => res.json())
      .then(data => {
        setStudents(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Students</h1>
      <div className="grid gap-4">
        {students.map(student => (
          <div key={student.id} className="border p-4 rounded shadow">
            <p><strong>Name:</strong> {student.name}</p>
            <p><strong>Grade:</strong> {student.grade}</p>
            <p><strong>Class:</strong> {student.class}</p>
            <p><strong>Email:</strong> {student.email}</p>
          </div>
        ))}
      </div>
    </div>
  );
  }
