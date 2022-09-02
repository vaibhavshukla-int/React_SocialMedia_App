import TourModal from "../models/Tour.js";

export const createTour = async (res, req) => {
  const tour = req.body;
  const newTour = new TourModal({
    ...tour,
    createdAt: new Date().toISOString(),
  });

  try {
    await newTour.save();
    res.status(201).json(newTour);
  } catch (error) {
    res.status(404).json({ message: "Something went wrong" });
    console.log(error);
  }
};

export const getTours = async (req, res) => {
  try {
    const tours = await TourModal.find();
    res.status(200).json(tours);
  } catch (error) {
    res.status(404).json({ message: "Something went wrong" });
    console.log(error);
  }
};
