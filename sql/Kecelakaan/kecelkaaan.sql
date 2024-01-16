-- Melihat Seluruh Isi Data 
select * from accident;
select * from vehicle;
select * from accident join vehicle ;
-- Jumlah Kecelakaan  Menurut Hari 

select count(AccidentIndex) as jumlah_kecelakaan,Day from accident group by Day 
order by jumlah_kecelakaan desc;

--  Jumlah Kecelakaan Menurut Tanggal
select count(AccidentIndex) as jumlah_kecelakaan,Date as tahun  from accident
 group by tahun 
order by jumlah_kecelakaan desc limit 5;

-- Jumlah Kecelakaan Menurut Kondisi Cahaya 
select count(AccidentIndex) as jumlah_kecelakaan,LightConditions from accident group by
LightConditions


order by jumlah_kecelakaan desc; 

-- Jumlah Kecelakaan Menurut Kondisi Jalanan
select count(AccidentIndex) as jumlah_kecelakaan,RoadConditions from accident group by
RoadConditions
order by jumlah_kecelakaan desc; 

-- Jumlah Kecelakaan Menurut Kondisi Cuaca

select count(AccidentIndex) as jumlah_kecelakaan,WeatherConditions from accident group by
WeatherConditions
order by jumlah_kecelakaan desc; 
-- Jumlah Kecelakaan Menurut Tipe Kendaraan Dan Area
select accident.AccidentIndex ,accident.Area, 
vehicle.VehicleType ,count(vehicle.AccidentIndex) as jumlah_kecelakaan 
from accident
inner join vehicle where accident.AccidentIndex = vehicle.AccidentIndex
group by
 vehicle.VehicleType order by jumlah_kecelakaan desc;
 
 -- Jumlah Kecelakaan dengan tipe kendaraan 
 select count(AccidentIndex) as jumlah_kecelakaan ,VehicleType from
 vehicle group by VehicleType order by jumlah_kecelakaan desc limit 12;
 
 -- Jumlah Kecelakaan Dengan Tipe Area 
  select count(AccidentIndex) as jumlah_kecelakaan,Area from
 accident group by Area order by jumlah_kecelakaan desc;