


// import { useEffect, useState } from "react";

// const BackToTop = () => {
//   const [visible, setVisible] = useState(false);

//   const handleScroll = () => {
//     if (window.scrollY > 20) {
//       setVisible(true);
//     } else {
//       setVisible(false);
//     }
//   };

//   const scrollToTop = () => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);
// return (
//   <button
//     onClick={scrollToTop}
//     className="fixed bottom-5 right-5 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg"
//   >
//     ↑ Top
//   </button>
// );
//   // return (
//   //   <>
//   //     {visible && (
//   //       <button
//   //         onClick={scrollToTop}
//   //         className="fixed bottom-5 right-5 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition"
//   //       >
//   //         ↑ Top
//   //       </button>
//   //     )}
//   //   </>
//   // );
// };

// export default BackToTop;
import { useEffect, useState } from "react";

const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!visible) return null;

  return (
    <button
      onClick={scrollToTop}
      className="fixed bottom-5 right-5 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full shadow-lg transition-all duration-300 z-50"
    >
      ↑ Top
    </button>
  );
};

export default BackToTop;