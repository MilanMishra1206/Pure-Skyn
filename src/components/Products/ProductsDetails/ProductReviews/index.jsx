import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Box, Rating, LinearProgress } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import AddReviewSection from "./AddReviewSection";

export const ProductReviews = ({ reviewContent }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [averageRating, setAverageRating] = useState(0);
  const reviewsPerPage = 6;

  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;

  const currentReviews = reviewContent.slice(
    indexOfFirstReview,
    indexOfLastReview
  );
  const totalPages = Math.ceil(reviewContent.length / reviewsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    const ratingArr = reviewContent.map((item) => item.rating);
    const sum = ratingArr.reduce((acc, num) => acc + num, 0);
    const average = sum / ratingArr.length;
    setAverageRating(average);
  }, [reviewContent]);

  const ratingCount = [0, 0, 0, 0, 0];

  reviewContent.forEach((review) => {
    if (review.rating >= 1 && review.rating <= 5) {
      ratingCount[review.rating - 1] += 1;
    }
  });

  const totalReviews = reviewContent.length;

  return (
    <div className="py-12 text-zinc-50 bg-[#FAFAFA]">
      <div className="flex flex-col gap-4 md:!flex-row justify-between md:gap-2 px-1 md:!px-5 mb-4">
        <h2 className="text-4xl font-bold text-skyn text-center">
          Customer Reviews
        </h2>
        <AddReviewSection />
      </div>
      <div className="flex flex-col lg:!flex-row gap-2 px-1 md:!px-5">
        <div className="mb-4 lg:border-r-2">
          <div className="flex items-center gap-2">
            <span className="text-5xl text-skyn font-bold">
              {averageRating.toFixed(1)}
            </span>
            <div className="flex flex-col gap-1">
              <Box
                sx={{
                  width: 200,
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <Rating
                  name="text-feedback"
                  value={+averageRating.toFixed(1)}
                  readOnly
                  precision={0.5}
                  emptyIcon={
                    <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                  }
                />
              </Box>
              <p className="text-coal">
                Based on {reviewContent.length} reviews
              </p>
            </div>
          </div>
        </div>
        <div className="mb-6 lg:ml-5">
          {[4, 3, 2, 1, 0].map((index) => {
            const count = ratingCount[index];
            const percentage = (count / totalReviews) * 100;
            return (
              <div key={index} className="flex items-center gap-2 mb-2">
                <Box
                  sx={{
                    width: 150,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Rating
                    name="text-feedback"
                    value={index + 1}
                    readOnly
                    precision={0.5}
                    emptyIcon={
                      <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                    }
                  />
                </Box>
                <Box
                  sx={{
                    width: 120,
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <LinearProgress
                    variant="determinate"
                    value={percentage}
                    sx={{
                      height: 16,
                      border: 1,
                      backgroundColor: "#E0E0E0",
                      "& .MuiLinearProgress-bar": {
                        backgroundColor: "#EE6503",
                      },
                      width: "100px",
                    }}
                  />
                </Box>
                <div className="text-coal font-poppins">
                  <span>{count}</span> <span>({percentage.toFixed(1)}%)</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <motion.div
        initial="initial"
        animate="animate"
        transition={{
          staggerChildren: 0.05,
        }}
        className="mx-auto grid px-1 md:!px-5 grid-flow-dense md:!grid-cols-12 gap-4"
      >
        {currentReviews.map((item) => (
          <div
            key={item.id}
            className="col-span-6 lg:!col-span-4 rounded-lg border p-4"
          >
            <div className="flex gap-2 items-center">
              <div className="bg-coal text-white w-8 h-8 rounded-full flex items-center justify-center">
                {item.name[0]}
              </div>
              <p className="font-bold text-coal">{item.name}</p>
              <Box sx={{ ml: 2 }}>
                <Rating
                  name="text-feedback"
                  value={item.rating}
                  readOnly
                  precision={0.5}
                  emptyIcon={
                    <StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />
                  }
                />
              </Box>
            </div>
            <p className="text-coal text-sm mt-2">{item.review}</p>
            <p className="text-cello text-xs mt-2">{item.date}</p>
          </div>
        ))}
      </motion.div>

      <div className="flex justify-center gap-2 mt-6">
        <button
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-coal text-white rounded-md disabled:bg-gray-300"
        >
          Prev
        </button>
        {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={`px-4 py-2 rounded-md ${
              currentPage === index + 1
                ? "bg-coal text-white"
                : "bg-[#FAFAFA] text-coal"
            }`}
          >
            {index + 1}
          </button>
        ))}
        <button
          onClick={() => paginate(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-coal text-white rounded-md disabled:bg-gray-300"
        >
          Next
        </button>
      </div>
    </div>
  );
};
