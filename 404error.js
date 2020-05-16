exports.error = (req, res, next) => {
    res.status(404).render('404', { pagetitle: "Page not found" });
    // This is not connected to 404.pug as because of SVG
    //   res.status(404).render("404");
};