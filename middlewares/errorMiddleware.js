function errorMiddleware(err, req, res, next) {
    // Tangkap kesalahan yang tidak diketahui
    if (!err.status) {
      console.error(err); // Log error
      return res.status(500).json({ message: 'Internal Server Error' });
    }
  
    // Tangkap kesalahan yang diketahui
    res.status(err.status).json({ message: err.message });
}
  
module.exports = errorMiddleware;  