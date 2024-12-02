import { useEffect, useState } from "react";
import { db } from "../firebase";
import { collection, getDocs, updateDoc, doc } from "firebase/firestore";

type Submission = {
  id: string;
  name: string;
  email: string;
  phone: number;
  message: string;
  status: string;
};

function AdminPanel() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSubmissions = async () => {
      const querySnapshot = await getDocs(collection(db, "form-submissions"));
      const data = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as Submission[];
      setSubmissions(data);
      setLoading(false);
    };
    fetchSubmissions();
  }, []);

  const markAsRead = async (id: string) => {
    const docRef = doc(db, "form-submissions", id);
    await updateDoc(docRef, { status: "read" });
    setSubmissions((prev) =>
      prev.map((item) => (item.id === id ? { ...item, status: "read" } : item))
    );
  };

  return (
    <div className="bg-zinc-800 pb-4 px-2 text-white">
      {loading ? (
        <p>loading</p>
      ) : (
        <div className="flex  flex-col gap-4 ">
          <h1 className="text-center pt-4 font-montserrat text-3xl">
            HarbingerAr Admin
          </h1>
          <h2 className="capitalize border-t border-gray-400 px-2 pt-4 text-center font-montserrat text-3xl text-zinc-600 ">
            unread Submissions
          </h2>
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 pb-4 font-heebo  px-2  gap-2 border-t pt-4 border-b border-gray-400">
            {submissions
              .filter((item) => item.status === "unread")
              .map((item) => (
                <div
                  key={item.id}
                  className="pb-4 flex flex-col gap-2 py-4   border-zinc-600 border-2 px-4"
                >
                  <h2>Name: {item.name}</h2>
                  <h2>Email: {item.email}</h2>
                  <h2>Phone: {item.phone}</h2>
                  <p className="pb-2">Message: {item.message}</p>

                  <button
                    className="py-2 px-2  hover:bg-white hover:text-zinc-800 w-full border border-zinc-700  flex justify-center items-center"
                    onClick={() => markAsRead(item.id)}
                  >
                    mark as read
                  </button>
                </div>
              ))}
          </div>
          <h2 className="capitalize px-2 text-center font-montserrat text-3xl text-zinc-600 ">
            read Submissions
          </h2>
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1  px-2 gap-2 border-t pt-4 border-gray-400">
            {submissions
              .filter((item) => item.status === "read")
              .map((item) =>
                item ? (
                  <div
                    key={item.id}
                    className="pb-4  border-zinc-600 flex flex-col gap-2  py-2 border-2 px-2"
                  >
                    <h2>Name: {item.name}</h2>
                    <h2>Email: {item.email}</h2>
                    <h2>Phone: {item.phone}</h2>
                    <p className="">Message: {item.message}</p>
                  </div>
                ) : (
                  "no read msgs"
                )
              )}
          </div>
        </div>
      )}
    </div>
  );
}
export default AdminPanel;
