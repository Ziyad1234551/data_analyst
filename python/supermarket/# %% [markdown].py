# %% [markdown]
# 

# %% [markdown]
# 

# %% [markdown]
# 

# %% [markdown]
# 

# %% [markdown]
# 

# %% [markdown]
# 

# %%
import pandas as pd 
import matplotlib.pyplot as plt 
import seaborn as sns 
import plotly.express as px  
plt.style.use("ggplot")
data = pd.read_csv(r"C:\Users\ACER\Documents\Portofolio_dataana\data_analyst\python\supermarket\supermarket_sales - Sheet1.csv")
# Melihat Seluruh Data
data.head()
# Menghapus null 
data.isnull().sum()
data.dropna(inplace=True)


# Banyak Nya Gender  

# sns.countplot(data['Gender'])

# Jumlah Tipe Customer 
# sns.countplot(data['Customer type'])



# Total Produk Sesuai Kota 
# plt.title("total penjualan produk Sesuai Kota")
# plt.xticks(rotation=90)
# plt.xlabel("Kota")
# plt.ylabel("Total Penjualan produk ")
# sns.barplot(x=data['City'],y=data['Total'],hue=data['Product line'])

# Total Produk Sesuai Tipe Customer 
# plt.xlabel("Tipe Customer")
# plt.ylabel("Total Penjualan produk ")

# sns.barplot(x=data['Customer type'],y=data['Total'],hue=data['Product line'])



#  Produk Sesuai Rating
# plt.xticks(rotation="vertical")
# plt.ylabel("Rating Produk")
# plt.xlabel("Jenis Produk")
# sns.boxplot(x=data['Product line'],y=data['Rating'])

# Membuat Data Tahun 
# import datetime as dt 
data['Date'] = pd.to_datetime(data['Date'])
data['Year'] = data['Date'].dt.year

# data.head()
# # Persenan Tipe Pembelian 

ps = px.pie(names=data['Payment'],values=data['Total'],title='Persenan Pembelian Dengan Jenis Pembelian')
plt.title("Data Tipe Pembelian Melalui Persen")

ps.show()
# Jumlah Produk Sesuai Tipe Produk 
# plt.xlabel("tipe produk")
# plt.ylabel("jumlah produk")
# plt.xticks(rotation=90)
# sns.barplot(x=data['Product line'],y=data['Quantity'].sum())

# %%


# %%


# %%


# %%


# %%


# %%


# %%


# %%


# %%


# %%



