# Bitwise Koch Curve Visualiser

A Django web application for generating, animating, and visualising the Koch curve fractal using modern JavaScript and SVG. The project features smooth path drawing animations powered by anime.js and dynamic zooming to explore fractal detail at higher iterations.

## Features

- Recursive Koch curve generation
- SVG rendering and animation
- Dynamic zoom based on iteration depth
- Responsive, modern UI
- Easily configurable iteration count

## Getting Started

### Prerequisites

- Python 3.8+
- Django 4.x
- Node.js (optional, for local anime.js)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/kochcurvevisualiser.git
   cd kochcurvevisualiser
   ```
2. Install Django:
   ```bash
   pip install Django
   ```
3. Activate the virtual environment:
   ```bash
   cd /venv/
   Scripts/activate
   ```
4. Start the development server:
   ```bash
   cd ../kochcurvevisualiser
   python manage.py runserver
   ```
5. Open your browser at [http://localhost:8000](http://localhost:8000)

## Project Structure

```
kochcurvevisualiser/
├── db.sqlite3
├── manage.py
├── kochcurvevisualiser/
│   ├── __init__.py
│   ├── asgi.py
│   ├── settings.py
│   ├── urls.py
│   ├── wsgi.py
│   └── ...
├── main/
│   ├── __init__.py
│   ├── admin.py
│   ├── apps.py
│   ├── models.py
│   ├── tests.py
│   ├── views.py
│   └── migrations/
├── static/
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   └── animation.js
│   └── templates/
│       └── base.html
└── README.md
```

## Usage

- Adjust the number of iterations in `static/js/animation.js` to explore different levels of fractal detail.
- Or use the in built controls in the webapp.
- The animation and zoom are handled automatically on page load.

## Technologies Used

- Django
- JavaScript (ES6 modules)
- anime.js (via CDN)
- SVG
- HTML5/CSS3

## Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you would like to change.

## Acknowledgements

- [anime.js](https://animejs.com/) for animation
- [Django](https://www.djangoproject.com/) for the web framework
- Fractal math resources and SVG documentation
