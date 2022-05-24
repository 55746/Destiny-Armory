"""empty message

Revision ID: e011f4e373e0
Revises: 0e52c347db0e
Create Date: 2022-05-24 16:11:52.949680

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = 'e011f4e373e0'
down_revision = '0e52c347db0e'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('common_weapon')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('common_weapon',
    sa.Column('id', sa.INTEGER(), autoincrement=True, nullable=False),
    sa.Column('weapon_name', sa.VARCHAR(length=120), autoincrement=False, nullable=False),
    sa.Column('weapon_type', sa.VARCHAR(length=20), autoincrement=False, nullable=False),
    sa.Column('weapon_class', sa.VARCHAR(length=20), autoincrement=False, nullable=False),
    sa.Column('weapon_lore', sa.VARCHAR(length=1000), autoincrement=False, nullable=False),
    sa.Column('location_description', sa.VARCHAR(length=1000), autoincrement=False, nullable=True),
    sa.PrimaryKeyConstraint('id', name='common_weapon_pkey')
    )
    # ### end Alembic commands ###