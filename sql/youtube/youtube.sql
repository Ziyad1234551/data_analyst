--  Melihat Seluruh Data 

select * from youtube;


--  Top 5 Youtuber Dengan Subscriber Terbanyak 

select Youtuber,sum(subscribers) as jumlah_subscriber from youtube group by Youtuber
order by jumlah_subscriber desc limit 5;
--  Top 5 Kategori Dengan Subscriber Terbanyak
select Category ,sum(subscribers) as jumlah_subscriber from youtube group by Category 
order by jumlah_subscriber desc limit 5;


--  Top 5 Negara Dengan Subscribers Terbanyak 
select Country,round(sum(subscribers)) as jumlah_subscriber  from youtube
group by Country order by jumlah_subscriber limit 5
;

-- Negara Dengan Total Penghasilan Terbanyak 
select Country,round(sum(highest_yearly_earnings)) as penghasilan  from youtube
group by Country order by penghasilan desc limit  5;

-- Youtuber Dengan Penghasilan Terbanyak

select Youtuber, round(sum(highest_yearly_earnings)) as penghasilan from youtube 
group by Youtuber order by penghasilan desc limit 5;

-- Youtuber Indonesia Dengan Penghasilan Terbanyak; 

select Youtuber, round(sum(highest_yearly_earnings)) as penghasilan   from youtube 
where Country ="Indonesia"
group by Youtuber  order by penghasilan desc limit 5 ;

-- Tipe Channel Dengan Subscriber_terbanyak;

 select channel_type,round(sum(subscribers)) as jumlah_subscriber  from youtube
 group by channel_type order by jumlah_subscriber desc ;