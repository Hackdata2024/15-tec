# Hackdata

[Video (Google Drive)](https://drive.google.com/file/d/1O2SIA_fRIh_hoyWS_uA0BSJknZQm4fTn/view?usp=sharing)

Our project predicts flood on state regions using based on these parameters: the precipitation level on which the mishappening took place and the elevation level of that place.

We found a reliable trend from the chaotic nature of the two parameters took side by side.
 ![Screenshot from 2024-02-04 11-12-19](https://github.com/spuckhafte/tectonix/assets/70335252/77c17284-93c7-430e-a7ff-24d603c2aa96)
 
This is the `elevation vs precipitation` graph that looks very chaotic, but
![170702557063995244](https://github.com/spuckhafte/tectonix/assets/70335252/41c823de-b3b6-47aa-9940-bbe2e420a791)

It has this very subtle but beautiul deacying trend which can be easily approximated to a linear decreasing graph.
![model](https://github.com/spuckhafte/tectonix/assets/70335252/0bc81923-67ae-4276-8c84-9623ff26aa75)

The equation $\`y = -0.58x + 1462$\`, was the model we were looking for.

This is 90% accurate to the data collected:
![Screenshot from 2024-02-04 11-04-23](https://github.com/spuckhafte/tectonix/assets/70335252/b6bbc419-a3a2-436d-96fb-86720d2cd942)


Predicting two previous flood events
![Screenshot from 2024-02-04 11-04-54](https://github.com/spuckhafte/tectonix/assets/70335252/c4e08354-c480-4443-8ac5-ae2fe75de4f6)


### Frontend
We used the mathematical model and integrated it with our site to provide a *yes/no* prediction out of the two parameters that are being collected from the openweatherapi.

 - Live site: https://tectonix.netlify.app
 - Run on your machine:
   ```
   1. Clone the repo
   2. cd frontend
   3. npm run dev
   ```

