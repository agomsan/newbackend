const { Op } = require("sequelize");
const { Appointment, Service, User } = require("../models");
const appointmentController = {};
const { dateValidator } = require("../helpers/validators");

appointmentController.create = async (req, res) => {
  const { appointment_date, service_id, artist_id } = req.body;
  const user_id = req.tokenData.userId;

  try {
    if (
      !appointment_date ||
      !user_id ||
      !service_id ||
      !dateValidator(appointment_date)
    ) {
      return res.status(400).json({
        success: true,
        message: "Invalid appointment date",
      });
    }

    const appointments = await Appointment.findOne({
      where: {
        user_id: user_id,
        appointment_date: {
          [Op.gt]: new Date(), // Op.gt es el mayor que
        },
      },
    });

    if (appointments != null) {
      return res.status(400).json({
        success: true,
        message: "You already have an appointment",
      });
    }

    await Appointment.create({
      appointment_date,
      user_id,
      service_id,
      artist_id,
    });

    res.status(200).json({
      success: true,
      message: "Appointment generated successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error generating Appointment",
      error: error.message,
    });
  }
};

appointmentController.getMyAppointments = async (req, res) => {
  try {
    const userId = req.tokenData.userId;
    const appointments = await Appointment.findAll({
      where: { user_id: userId },
      attributes: {
        exclude: [
          "createdAt",
          "updatedAt",
          "user_id",
          "service_id",
          "artist_id",
        ],
      },
      include: [
        {
          model: Service,
          as: "services",
          attributes: { exclude: ["createdAt", "updatedAt"] },
        },
        {
          model: User,
          as: "artist",
          attributes: {
            exclude: ["createdAt", "updatedAt", "role_id", "email", "password"],
          },
        },
      ],
    });

    res.status(200).json({
      success: true,
      message: "Appointments retrieved successfully",
      data: appointments,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error recovering your appointments",
      error: error.message,
    });
  }
};

appointmentController.getById = async (req, res) => {
  const user_id = req.tokenData.userId;
  const appointmentId = req.params.id;
  try {
    const appointment = await Appointment.findOne({
      where: {
        id: appointmentId,
        user_id: user_id,
      },
      attributes: {
        exclude: [
          "createdAt",
          "updatedAt",
          "user_id",
          "service_id",
          "artist_id",
        ],
      },
      include: [
        {
          model: User,
          as: "user",
          attributes: {
            exclude: ["createdAt", "updatedAt", "role_id", "password"],
          },
        },
        {
          model: Service,
          as: "services",
          attributes: { exclude: ["createdAt", "updatedAt"] },
        },
        {
          model: User,
          as: "artist",
          attributes: {
            exclude: ["createdAt", "updatedAt", "role_id", "email", "password"],
          },
        },
      ],
    });
    if (!appointment) {
      return res.status(404).json({
        success: true,
        message: "appointment not found",
        data: appointmentId,
      });
    }

    res.status(200).json({
      success: true,
      message: "Appointment retrieved successfully",
      data: appointment,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error recovering appointment",
      error: error.message,
    });
  }
};

appointmentController.update = async (req, res) => {
  const { ...restAppointmentData } = req.body;
  const userId = req.tokenData.userId;
  try {
    const myAppointment = await Appointment.findOne({
      where: { user_id: userId },
    });

    if (myAppointment === null) {
      return res.status(404).json({
        success: true,
        message: "No appointments",
      });
    }

    if (req.body && Object.keys(req.body).length === 0) {
      return res.status(404).json({
        success: true,
        message: "The data is not valid",
      });
    }

    if (
      req.body.appointment_date &&
      !dateValidator(req.body.appointment_date)
    ) {
      return res.status(404).json({
        success: true,
        message: "The date is not valid",
      });
    }
    const appointmentToUpdate = await Appointment.findByPk(myAppointment.id);

    if (!appointmentToUpdate) {
      return res.status(404).json({
        success: true,
        message: "Appointment can't be found",
      });
    }

    appointmentToUpdate.set({
      ...appointmentToUpdate,
      ...restAppointmentData,
    });

    await appointmentToUpdate.save();

    res.status(200).json({
      success: true,
      message: "Appointment updated successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error updating Appointment",
      error: error.message,
    });
  }
};

appointmentController.delete = async (req, res) => {
  const appointmentId = req.params.id;

  try {
    const deleteResult = await Appointment.destroy({
      where: {
        id: appointmentId,
      },
    });

    if (deleteResult === 0) {
      return res.status(404).json({
        success: true,
        message: "Appointment not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Appointment deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Error deleting appointment",
      error: error.message,
    });
  }
};

module.exports = appointmentController;
