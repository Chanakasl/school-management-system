'use client';
import { useEffect, useState } from 'react';

export default function ClassesPage() {
  const [classes, setClasses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/classes')
      .then(res => res.json())
      .then(data => {
        setClasses(data);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Classes</h1>
      <div className="grid gap-4">
        {classes.map(cls => (
          <div key={cls.id} className="border p-4 rounded shadow">
            <p><strong>Class Name:</strong> {cls.name}</p>
            <p><strong>Teacher ID:</strong> {cls.teacherId}</p>
            <p><strong>Number of Students:</strong> {cls.students.length}</p>
          </div>
        ))}
      </div>
    </div>
  );
  }
